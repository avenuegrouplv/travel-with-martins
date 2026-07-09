import { useState, useEffect } from "react";
import { 
  Lock, Mail, Key, Github, Save, Download, Globe, RefreshCw, Plus, 
  Trash2, ArrowUp, ArrowDown, Settings, FileText, CheckCircle2, 
  AlertCircle, ArrowLeft, LogOut, Edit, HelpCircle, BookOpen, MapPin, 
  ExternalLink, Eye, ChevronRight, Menu, X, Check
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Hashing helper for passwords
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

interface Destination {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  tags: string[];
}

export default function AdminCMS() {
  const { lang, setLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"destinations" | "translations" | "settings">("destinations");
  const [activeLangEdit, setActiveLangEdit] = useState<"LV" | "EN" | "RU">("LV");
  const [translationSection, setTranslationSection] = useState<string>("home");

  // Authentication State
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  
  // Setup State (if unconfigured)
  const [setupEmail, setSetupEmail] = useState<string>("");
  const [setupPassword, setSetupPassword] = useState<string>("");
  const [setupPasswordConfirm, setSetupPasswordConfirm] = useState<string>("");

  // GitHub integration details (saved in local storage)
  const [ghToken, setGhToken] = useState<string>(() => localStorage.getItem("cms_gh_token") || "");
  const [ghRepo, setGhRepo] = useState<string>(() => localStorage.getItem("cms_gh_repo") || "avenuegrouplv/travel-with-martins");
  const [ghBranch, setGhBranch] = useState<string>(() => localStorage.getItem("cms_gh_branch") || "main");

  // CMS Config loaded from /content/cms-config.json or localStorage
  const [cmsConfig, setCmsConfig] = useState<any>(null);

  // Core Data States
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [translationsData, setTranslationsData] = useState<Record<string, any>>({
    LV: null,
    EN: null,
    RU: null
  });

  // Edited State tracker (dirty drafts)
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [syncMessage, setSyncMessage] = useState<string>("");

  // Loading indicator for fetching data
  const [loadingData, setLoadingData] = useState<boolean>(true);

  // Editor states
  const [editingDestination, setEditingDestination] = useState<Destination | null>(null);
  const [isAddingDestination, setIsAddingDestination] = useState<boolean>(false);

  // --- Initial Configuration & Login Checks ---
  useEffect(() => {
    async function initCMS() {
      setLoadingData(true);
      try {
        // Try to fetch existing CMS config
        const response = await fetch("/content/cms-config.json");
        if (response.ok) {
          const config = await response.json();
          setCmsConfig(config);
          setIsConfigured(true);
        } else {
          // Check local storage for local-only setup fallback
          const localEmail = localStorage.getItem("cms_local_email");
          const localHash = localStorage.getItem("cms_local_password_hash");
          if (localEmail && localHash) {
            setCmsConfig({
              adminEmail: localEmail,
              adminPasswordHash: localHash
            });
            setIsConfigured(true);
          } else {
            setIsConfigured(false);
          }
        }
      } catch (err) {
        console.error("Failed to load CMS config, assuming unconfigured", err);
        setIsConfigured(false);
      }

      // Check if session token exists in sessionStorage to auto-login
      const sessionActive = sessionStorage.getItem("cms_session_active") === "true";
      if (sessionActive) {
        setIsAuthenticated(true);
      }
      setLoadingData(false);
    }
    initCMS();
  }, []);

  // Fetch core data upon authentication
  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchCoreData() {
      setLoadingData(true);
      try {
        // Load destinations
        const destRes = await fetch("/content/destinations/destinations.json");
        if (destRes.ok) {
          const data = await destRes.json();
          setDestinations(data.destinations || []);
        }

        // Load translations
        const [lvRes, enRes, ruRes] = await Promise.all([
          fetch("/content/translations/lv.json"),
          fetch("/content/translations/en.json"),
          fetch("/content/translations/ru.json")
        ]);

        const lvData = lvRes.ok ? await lvRes.json() : null;
        const enData = enRes.ok ? await enRes.json() : null;
        const ruData = ruRes.ok ? await ruRes.json() : null;

        setTranslationsData({
          LV: lvData,
          EN: enData,
          RU: ruData
        });
      } catch (err) {
        console.error("Error loading core CMS data", err);
      } finally {
        setLoadingData(false);
      }
    }

    fetchCoreData();
  }, [isAuthenticated]);

  // Handle first-time setup
  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!setupEmail || !setupPassword) {
      alert("Lūdzu aizpildiet visus laukus!");
      return;
    }
    if (setupPassword !== setupPasswordConfirm) {
      alert("Paroles nesakrīt!");
      return;
    }

    const hash = await sha256(setupPassword);
    
    // Save locally
    localStorage.setItem("cms_local_email", setupEmail);
    localStorage.setItem("cms_local_password_hash", hash);

    if (ghToken) {
      localStorage.setItem("cms_gh_token", ghToken);
    }
    if (ghRepo) {
      localStorage.setItem("cms_gh_repo", ghRepo);
    }

    setCmsConfig({
      adminEmail: setupEmail,
      adminPasswordHash: hash
    });
    
    setIsConfigured(true);
    setIsAuthenticated(true);
    sessionStorage.setItem("cms_session_active", "true");
    
    // Auto save config JSON as draft
    setIsDirty(true);
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmsConfig) return;

    const hash = await sha256(passwordInput);
    if (emailInput.toLowerCase().trim() === cmsConfig.adminEmail.toLowerCase().trim() && hash === cmsConfig.adminPasswordHash) {
      setIsAuthenticated(true);
      sessionStorage.setItem("cms_session_active", "true");
    } else {
      alert("Nepareizs e-pasts vai parole!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("cms_session_active");
  };

  // --- Core CMS Operations ---

  // Update Destination Array
  const saveDestinations = (updated: Destination[]) => {
    setDestinations(updated);
    setIsDirty(true);
  };

  // Reorder Destinations
  const moveDestination = (index: number, direction: "up" | "down") => {
    const updated = [...destinations];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= updated.length) return;

    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    saveDestinations(updated);
  };

  const deleteDestination = (id: string) => {
    if (!confirm("Vai tiešām vēlaties dzēst šo galamērķi?")) return;
    const updated = destinations.filter(d => d.id !== id);
    saveDestinations(updated);
  };

  const handleSaveDestinationForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDestination) return;

    // Validate ID
    if (!editingDestination.id.trim()) {
      alert("ID ir obligāts lauks!");
      return;
    }

    let updated: Destination[];
    if (isAddingDestination) {
      // Check duplicate ID
      if (destinations.some(d => d.id === editingDestination.id)) {
        alert("Galamērķis ar šādu ID jau eksistē!");
        return;
      }
      updated = [...destinations, editingDestination];
    } else {
      updated = destinations.map(d => d.id === editingDestination.id ? editingDestination : d);
    }

    saveDestinations(updated);
    setEditingDestination(null);
    setIsAddingDestination(false);
  };

  // Update Translations Key
  const updateTranslationValue = (section: string, key: string, value: any) => {
    setTranslationsData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      if (!copy[activeLangEdit]) return prev;

      if (!copy[activeLangEdit][section]) {
        copy[activeLangEdit][section] = {};
      }
      copy[activeLangEdit][section][key] = value;
      return copy;
    });
    setIsDirty(true);
  };

  // Update nested properties (arrays of objects, etc.)
  const updateNestedTranslation = (updater: (langData: any) => void) => {
    setTranslationsData(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      if (!copy[activeLangEdit]) return prev;
      updater(copy[activeLangEdit]);
      return copy;
    });
    setIsDirty(true);
  };

  // --- GitHub Push / Deploy Action ---
  const handlePublish = async () => {
    if (!ghToken) {
      alert("Lūdzu ievadiet savu GitHub Personal Access Token iestatījumos, lai saglabātu izmaiņas tieši mājaslapā!");
      setActiveTab("settings");
      return;
    }

    setSyncStatus("loading");
    setSyncMessage("Notiek sagatavošanās, tiek pārbaudīts GitHub repozitorijs...");

    const headers = {
      Authorization: `token ${ghToken}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json"
    };

    const filesToPush = [
      {
        path: "content/destinations/destinations.json",
        content: JSON.stringify({ title: "Galamērķu saraksts", destinations }, null, 2)
      },
      {
        path: "content/translations/lv.json",
        content: JSON.stringify(translationsData.LV, null, 2)
      },
      {
        path: "content/translations/en.json",
        content: JSON.stringify(translationsData.EN, null, 2)
      },
      {
        path: "content/translations/ru.json",
        content: JSON.stringify(translationsData.RU, null, 2)
      }
    ];

    // Include cms-config.json in repo if it was newly set up or changed
    if (cmsConfig) {
      filesToPush.push({
        path: "content/cms-config.json",
        content: JSON.stringify(cmsConfig, null, 2)
      });
    }

    try {
      // Loop through each file, get its current SHA, then commit/put it
      for (const file of filesToPush) {
        setSyncMessage(`Tiek sinhronizēts fails: ${file.path}...`);
        
        // 1. Get SHA
        const getUrl = `https://api.github.com/repos/${ghRepo}/contents/${file.path}?ref=${ghBranch}`;
        let sha: string | null = null;
        
        const getRes = await fetch(getUrl, { headers });
        if (getRes.ok) {
          const fileData = await getRes.json();
          sha = fileData.sha;
        }

        // 2. Commit update
        const putUrl = `https://api.github.com/repos/${ghRepo}/contents/${file.path}`;
        const body: any = {
          message: `CMS Update: Atjaunināts saturs (${file.path})`,
          content: btoa(unescape(encodeURIComponent(file.content))), // Safe Base64 encoding for Unicode
          branch: ghBranch
        };
        if (sha) {
          body.sha = sha;
        }

        const putRes = await fetch(putUrl, {
          method: "PUT",
          headers,
          body: JSON.stringify(body)
        });

        if (!putRes.ok) {
          const errData = await putRes.json();
          throw new Error(`Neizdevās saglabāt ${file.path}: ${errData.message}`);
        }
      }

      // Save credentials and repo settings permanently
      localStorage.setItem("cms_gh_token", ghToken);
      localStorage.setItem("cms_gh_repo", ghRepo);
      localStorage.setItem("cms_gh_branch", ghBranch);

      setSyncStatus("success");
      setSyncMessage("Apsveicam! Izmaiņas tika veiksmīgi saglabātas un nosūtītas uz GitHub. Netlify šobrīd automātiski pārbūvē un atjaunina mājaslapu! Tas aizņems aptuveni 1-2 minūtes.");
      setIsDirty(false);
    } catch (err: any) {
      console.error(err);
      setSyncStatus("error");
      setSyncMessage(`Kļūda sinhronizējot ar GitHub: ${err.message || err}. Lūdzu pārbaudiet savu Tokenu un repozitorija nosaukumu.`);
    }
  };

  // Download Backup JSON helper
  const downloadBackup = (filename: string, contentObj: any) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contentObj, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Render Loading Page
  if (loadingData && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex flex-col justify-center items-center p-6">
        <RefreshCw className="w-12 h-12 animate-spin text-[#2C2B29] mb-4" />
        <p className="text-[#2C2B29] font-medium font-mono text-sm">Ielādē vadības paneli...</p>
      </div>
    );
  }

  // Render First Time Setup Screen
  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-3">
              <Settings className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">CMS Sākotnējā iestatīšana</h2>
            <p className="text-sm text-gray-500 mt-2">
              Izveidojiet savu administratora kontu, lai sāktu labot mājaslapu.
            </p>
          </div>

          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                Admin E-pasts
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="piem. administrators@travel.lv"
                  value={setupEmail}
                  onChange={e => setSetupEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                Admin Parole
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Izveidojiet drošu paroli"
                  value={setupPassword}
                  onChange={e => setSetupPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                Apstipriniet paroli
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Atkārtojiet paroli"
                  value={setupPasswordConfirm}
                  onChange={e => setSetupPasswordConfirm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white"
                />
              </div>
            </div>

            <hr className="border-gray-100 my-4" />

            <div className="bg-amber-50 rounded-lg p-3 text-amber-800 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold">Svarīgi:</span> Šī CMS ir tieši pieslēgta jūsu GitHub krātuvei un publicējas uz Netlify. Šie dati tiks saglabāti droši šifrētā veidā.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                GitHub Repozitorijs (pēc noklusējuma)
              </label>
              <input
                type="text"
                placeholder="lietotajvards/repozitorijs"
                value={ghRepo}
                onChange={e => setGhRepo(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-600 font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold tracking-wide transition-colors mt-2 shadow-md cursor-pointer flex justify-center items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Pabeigt un atvērt CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-sm bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight font-sans uppercase">Mājaslapas CMS</h1>
            <p className="text-xs text-gray-400 font-mono mt-1">Travel with Martins Administrēšana</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Lietotāja e-pasts
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="e-pasts"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Parole
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="parole"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold tracking-wide transition-colors mt-2 cursor-pointer shadow-sm"
            >
              Pieslēgties panelim
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Atgriezties mājaslapā
            </a>
          </div>
        </div>
      </div>
    );
  }

  // --- Main Dashboard Rendering ---
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2C2B29] flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold text-gray-900 tracking-tight">Travel CMS</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-0.5">Mājaslapas saturs</p>
          </div>
          <button 
            onClick={handleLogout}
            title="Izrakstīties"
            className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-4 flex-grow space-y-1">
          <button
            onClick={() => { setActiveTab("destinations"); setEditingDestination(null); }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === "destinations" 
                ? "bg-gray-900 text-white shadow-sm" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Globe className="w-4.5 h-4.5" />
            Galamērķu saraksts
            <span className="ml-auto text-xs font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md group-hover:bg-gray-200">
              {destinations.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("translations"); setEditingDestination(null); }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === "translations" 
                ? "bg-gray-900 text-white shadow-sm" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <FileText className="w-4.5 h-4.5" />
            Tekstu Tulkošana
          </button>

          <button
            onClick={() => { setActiveTab("settings"); setEditingDestination(null); }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === "settings" 
                ? "bg-gray-900 text-white shadow-sm" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Settings className="w-4.5 h-4.5" />
            CMS Iestatījumi
          </button>
        </nav>

        {/* Sync / Publish Status Panel */}
        <div className="p-4 border-t border-gray-150 bg-gray-50/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500">Stāvoklis:</span>
            {isDirty ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800">
                Ir nesaglabātas izmaiņas
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800">
                Saskaņots ar GitHub
              </span>
            )}
          </div>

          <button
            disabled={!isDirty || syncStatus === "loading"}
            onClick={handlePublish}
            className={`w-full py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer ${
              isDirty 
                ? "bg-[#2C2B29] hover:bg-gray-800 text-white" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {syncStatus === "loading" ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Sinhronizē...
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" /> Publicēt uz GitHub
              </>
            )}
          </button>

          <button
            onClick={() => {
              downloadBackup("destinations-backup.json", { destinations });
              downloadBackup("translations-backup-lv.json", translationsData.LV);
              downloadBackup("translations-backup-en.json", translationsData.EN);
              downloadBackup("translations-backup-ru.json", translationsData.RU);
            }}
            className="w-full mt-2 py-1.5 text-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg text-[11px] font-medium transition-colors cursor-pointer block border border-dashed border-gray-200"
          >
            Lejupielādēt dublējumkopiju
          </button>
        </div>

        <div className="p-4 border-t border-gray-200 text-center text-[11px] text-gray-400 font-mono">
          <a href="/" target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1 text-gray-500 font-semibold mb-1">
            Skatīt mājaslapu <ExternalLink className="w-3 h-3" />
          </a>
          <p>© Travel with Martins</p>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-grow p-6 md:p-8 overflow-y-auto max-w-5xl mx-auto w-full">
        {/* Sync Alerts overlay or top notice */}
        {syncStatus !== "idle" && (
          <div className={`mb-6 p-4 rounded-xl border flex gap-3 ${
            syncStatus === "loading" ? "bg-blue-50 border-blue-100 text-blue-900" :
            syncStatus === "success" ? "bg-emerald-50 border-emerald-100 text-emerald-900" :
            "bg-red-50 border-red-100 text-red-900"
          }`}>
            {syncStatus === "loading" ? <RefreshCw className="w-5 h-5 shrink-0 animate-spin text-blue-600" /> :
             syncStatus === "success" ? <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" /> :
             <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />}
            <div className="text-sm">
              <span className="font-bold block mb-0.5">
                {syncStatus === "loading" ? "Notiek sinhronizēšana..." :
                 syncStatus === "success" ? "Veiksmīgi saglabāts!" : "Sinhronizācijas kļūda!"}
              </span>
              <p>{syncMessage}</p>
              {syncStatus !== "loading" && (
                <button 
                  onClick={() => setSyncStatus("idle")}
                  className="mt-2 text-xs underline font-semibold hover:no-underline cursor-pointer"
                >
                  Aizvērt paziņojumu
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 1: DESTINATIONS */}
        {activeTab === "destinations" && (
          <div>
            {editingDestination ? (
              /* Add/Edit Destination Form */
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <button 
                    onClick={() => { setEditingDestination(null); setIsAddingDestination(false); }}
                    className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" />
                  </button>
                  <h2 className="text-xl font-bold text-gray-900">
                    {isAddingDestination ? "Pievienot jaunu galamērķi" : `Labot galamērķi: ${editingDestination.name}`}
                  </h2>
                </div>

                <form onSubmit={handleSaveDestinationForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">ID (Slug - mazi burti)</label>
                      <input
                        type="text"
                        required
                        disabled={!isAddingDestination}
                        placeholder="piem. turcija"
                        value={editingDestination.id}
                        onChange={e => setEditingDestination({...editingDestination, id: e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "")})}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 font-mono disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Galamērķa Nosaukums (LV)</label>
                      <input
                        type="text"
                        required
                        placeholder="piem. Grieķija"
                        value={editingDestination.name}
                        onChange={e => setEditingDestination({...editingDestination, name: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Valsts karodziņa Emoji</label>
                      <input
                        type="text"
                        placeholder="piem. 🇬🇷"
                        value={editingDestination.flag}
                        onChange={e => setEditingDestination({...editingDestination, flag: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Attēla URL (Unsplash vai saite)</label>
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/..."
                        value={editingDestination.image}
                        onChange={e => setEditingDestination({...editingDestination, image: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 text-xs font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Ilgums</label>
                        <input
                          type="text"
                          placeholder="piem. 7 dienas"
                          value={editingDestination.duration}
                          onChange={e => setEditingDestination({...editingDestination, duration: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Cena (€)</label>
                        <input
                          type="number"
                          placeholder="piem. 450"
                          value={editingDestination.price || ""}
                          onChange={e => setEditingDestination({...editingDestination, price: parseInt(e.target.value) || 0})}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Apraksts (LV)</label>
                    <textarea
                      rows={3}
                      placeholder="Krāšņs apraksts par galamērķi, kas tiks rādīts kartītē..."
                      value={editingDestination.description}
                      onChange={e => setEditingDestination({...editingDestination, description: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Tagi / Pazīmes (Atdaliet ar komatiem)</label>
                    <input
                      type="text"
                      placeholder="piem. Pludmales, Kultūra, Viss iekļauts"
                      value={editingDestination.tags.join(", ")}
                      onChange={e => setEditingDestination({
                        ...editingDestination, 
                        tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean)
                      })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                    />
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#2C2B29] hover:bg-gray-800 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      Sagatavot izmaiņas
                    </button>
                    <button
                      type="button"
                      onClick={() => { setEditingDestination(null); setIsAddingDestination(false); }}
                      className="px-6 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      Atcelt
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Destinations Listing */
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Ceļojumu Galamērķu pārvalde</h2>
                    <p className="text-sm text-gray-500">Pievienojiet jaunas valstis, rediģējiet cenas vai mainiet to secību mājaslapā.</p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingDestination({
                        id: "",
                        name: "",
                        flag: "",
                        image: "",
                        description: "",
                        duration: "",
                        price: 0,
                        tags: []
                      });
                      setIsAddingDestination(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2C2B29] hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Pievienot Galamērķi
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          <th className="py-3 px-4 text-center w-12">Secība</th>
                          <th className="py-3 px-4">Valsts</th>
                          <th className="py-3 px-4">Ilgums</th>
                          <th className="py-3 px-4">Cena</th>
                          <th className="py-3 px-4">Tagi</th>
                          <th className="py-3 px-4 text-right w-36">Darbības</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 text-sm">
                        {destinations.map((dest, index) => (
                          <tr key={dest.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-4 text-center">
                              <div className="flex flex-col items-center gap-1">
                                <button
                                  disabled={index === 0}
                                  onClick={() => moveDestination(index, "up")}
                                  className={`p-0.5 rounded hover:bg-gray-200 transition-colors cursor-pointer ${index === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-500"}`}
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  disabled={index === destinations.length - 1}
                                  onClick={() => moveDestination(index, "down")}
                                  className={`p-0.5 rounded hover:bg-gray-200 transition-colors cursor-pointer ${index === destinations.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500"}`}
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-medium text-gray-900">
                              <div className="flex items-center gap-3">
                                {dest.image && (
                                  <img 
                                    src={dest.image} 
                                    alt={dest.name} 
                                    className="w-10 h-7 object-cover rounded border border-gray-200 shrink-0" 
                                  />
                                )}
                                <span className="text-base">{dest.flag}</span>
                                <div>
                                  <span className="font-semibold block">{dest.name}</span>
                                  <span className="text-xs font-mono text-gray-400">{dest.id}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{dest.duration}</td>
                            <td className="py-3 px-4 font-semibold font-mono text-gray-900">€{dest.price}</td>
                            <td className="py-3 px-4">
                              <div className="flex flex-wrap gap-1 max-w-[200px]">
                                {dest.tags.map(t => (
                                  <span key={t} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-semibold rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => { setEditingDestination(dest); setIsAddingDestination(false); }}
                                  className="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-lg transition-all cursor-pointer"
                                  title="Labot"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteDestination(dest.id)}
                                  className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-all cursor-pointer"
                                  title="Dzēst"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {destinations.length === 0 && (
                          <tr>
                            <td colSpan={6} className="py-12 text-center text-gray-400">
                              Nav atrasts neviens galamērķis.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Svarīgs atgādinājums par papildus tulkojumiem */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-amber-800 text-xs mt-6 flex items-start gap-2.5">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Ziniet par valodu sinhronizāciju:</span>
                    Pievienojot jaunu galamērķi, tā <span className="font-semibold">nosaukums, apraksts un ilgums</span> automātiski tiks rādīti no šīs kartītes. Ja vēlaties pielāgot valodu specifiskus tekstus, pārejiet uz cilni <span className="font-semibold">Tekstu Tulkošana</span>, izvēlieties sadaļu <span className="font-semibold">Galamērķi</span> un ierakstiet tulkojumus attiecīgajā valodā zem to atslēgas (ID).
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TRANSLATIONS EDITING */}
        {activeTab === "translations" && translationsData[activeLangEdit] && (
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Mājaslapas Tekstu Redaktors</h2>
                <p className="text-sm text-gray-500">Pielāgojiet jebkuru mājaslapas frāzi, BUJ sarakstu vai bloga rakstu.</p>
              </div>

              {/* Language Editor Selector */}
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-xs shrink-0 font-mono">
                {(["LV", "EN", "RU"] as const).map(l => (
                  <button
                    key={l}
                    onClick={() => setActiveLangEdit(l)}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      activeLangEdit === l 
                        ? "bg-gray-900 text-white" 
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {l === "LV" ? "Latviešu (LV)" : l === "EN" ? "English (EN)" : "Русский (RU)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Translation Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              {/* Category Sidebar */}
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 shadow-xs md:col-span-1 shrink-0 font-mono text-xs uppercase tracking-wider font-semibold">
                {[
                  { id: "header", label: "Galvene (Navigācija)" },
                  { id: "home", label: "Sākumlapa" },
                  { id: "collab", label: "Sadarbība" },
                  { id: "destinations", label: "Galamērķu lapa" },
                  { id: "faq", label: "BUJ saraksts" },
                  { id: "blog", label: "Blogs & Raksti" },
                  { id: "contactPage", label: "Kontaktu detaļas" },
                  { id: "contactForm", label: "Saziņas forma" },
                  { id: "footer", label: "Kājene (Footer)" },
                  { id: "cookieNotice", label: "Sīkdatņu logs" }
                ].map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => setTranslationSection(sec.id)}
                    className={`text-left px-3 py-2 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                      translationSection === sec.id 
                        ? "bg-gray-100 text-gray-900 font-bold" 
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {sec.label}
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                ))}
              </div>

              {/* Fields Editor stage */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:col-span-3 space-y-6">
                <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold">
                    Sadaļa: {translationSection}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-semibold font-mono">
                    Rediģē: {activeLangEdit === "LV" ? "Latviešu" : activeLangEdit === "EN" ? "Angļu" : "Krievu"} valodu
                  </span>
                </div>

                {/* DYNAMIC FIELD RENDERS ACCORDING TO ACTIVE SECTION */}

                {/* 1. Header Section */}
                {translationSection === "header" && (
                  <div className="space-y-4">
                    {[
                      { key: "home", label: "Home (Sākums)" },
                      { key: "collab", label: "Cooperation (Sadarbība)" },
                      { key: "destinations", label: "Destinations (Galamērķi)" },
                      { key: "faq", label: "FAQ (BUJ)" },
                      { key: "blog", label: "Blog (Blogs)" },
                      { key: "contacts", label: "Contacts (Kontakti)" },
                      { key: "contactBtn", label: "Contact Button (Saziņas poga)" }
                    ].map(field => (
                      <div key={field.key}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                        <input
                          type="text"
                          value={translationsData[activeLangEdit].header?.[field.key] || ""}
                          onChange={e => updateTranslationValue("header", field.key, e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Home Section */}
                {translationSection === "home" && (
                  <div className="space-y-5">
                    {/* General Section Labels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "aboutBadge", label: "Par mani - Mazais uzraksts" },
                        { key: "aboutTitle", label: "Par mani - Galvenais virsraksts" },
                        { key: "aboutSubtitle", label: "Par mani - Apakšvirsraksts" }
                      ].map(field => (
                        <div key={field.key} className="md:col-span-1">
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].home?.[field.key] || ""}
                            onChange={e => updateTranslationValue("home", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Par mani - Ievada teksts</label>
                      <textarea
                        rows={3}
                        value={translationsData[activeLangEdit].home?.aboutIntro || ""}
                        onChange={e => updateTranslationValue("home", "aboutIntro", e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Par mani - Galvenais stāsts</label>
                      <textarea
                        rows={4}
                        value={translationsData[activeLangEdit].home?.aboutBody || ""}
                        onChange={e => updateTranslationValue("home", "aboutBody", e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Par mani - Citāts / Misija</label>
                      <textarea
                        rows={3}
                        value={translationsData[activeLangEdit].home?.aboutQuote || ""}
                        onChange={e => updateTranslationValue("home", "aboutQuote", e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 italic"
                      />
                    </div>

                    <hr className="border-gray-100 my-4" />

                    {/* Stats Counter translation keys */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-3">Statistikas Skaitītāji</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { key: "countries", label: "Apmeklētās valstis" },
                          { key: "projects", label: "Izstrādātie maršruti" },
                          { key: "clients", label: "Laimīgie klienti" },
                          { key: "rating", label: "Klientu vērtējums" }
                        ].map(field => (
                          <div key={field.key}>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">{field.label}</label>
                            <input
                              type="text"
                              value={translationsData[activeLangEdit].home?.quickStats?.[field.key] || ""}
                              onChange={e => {
                                const copy = { ...translationsData[activeLangEdit].home.quickStats, [field.key]: e.target.value };
                                updateTranslationValue("home", "quickStats", copy);
                              }}
                              className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <hr className="border-gray-100 my-4" />

                    {/* Steps section header */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { key: "stepsBadge", label: "Sadarbības soļi - Mazais uzraksts" },
                        { key: "stepsTitle", label: "Sadarbības soļi - Virsraksts" },
                        { key: "stepsSubtitle", label: "Sadarbības soļi - Apakšvirsraksts" }
                      ].map(field => (
                        <div key={field.key}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].home?.[field.key] || ""}
                            onChange={e => updateTranslationValue("home", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Advantages section header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "advantagesBadge", label: "Priekšrocības - Mazais uzraksts" },
                        { key: "advantagesTitle", label: "Priekšrocības - Galvenais virsraksts" }
                      ].map(field => (
                        <div key={field.key}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].home?.[field.key] || ""}
                            onChange={e => updateTranslationValue("home", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Reviews section header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "reviewsBadge", label: "Atsauksmes - Mazais uzraksts" },
                        { key: "reviewsTitle", label: "Atsauksmes - Galvenais virsraksts" }
                      ].map(field => (
                        <div key={field.key}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].home?.[field.key] || ""}
                            onChange={e => updateTranslationValue("home", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Insta section header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "instaTitle", label: "Instagram sadaļas virsraksts" },
                        { key: "instaSubtitle", label: "Instagram sadaļas apakšvirsraksts" }
                      ].map(field => (
                        <div key={field.key}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].home?.[field.key] || ""}
                            onChange={e => updateTranslationValue("home", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Cooperation Section */}
                {translationSection === "collab" && (
                  <div className="space-y-4">
                    {[
                      { key: "badge", label: "Sadarbības process - Mazais uzraksts" },
                      { key: "title", label: "Sadarbības process - Galvenais virsraksts" },
                      { key: "subtitle", label: "Apraksts par procesu" },
                      { key: "bottomText1", label: "Apakšējais apraksts (1. rindkopa)" },
                      { key: "bottomText2", label: "Apakšējais apraksts (2. rindkopa)" },
                      { key: "toHome", label: "Atpakaļ uz sākumu poga" }
                    ].map(field => (
                      <div key={field.key}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                        {field.key.startsWith("subtitle") || field.key.startsWith("bottomText") ? (
                          <textarea
                            rows={3}
                            value={translationsData[activeLangEdit].collab?.[field.key] || ""}
                            onChange={e => updateTranslationValue("collab", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        ) : (
                          <input
                            type="text"
                            value={translationsData[activeLangEdit].collab?.[field.key] || ""}
                            onChange={e => updateTranslationValue("collab", field.key, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Destinations Page Section */}
                {translationSection === "destinations" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "badge", label: "Galamērķi - Mazais uzraksts" },
                        { key: "title", label: "Galamērķi - Galvenais virsraksts" },
                        { key: "subtitle", label: "Galamērķi - Apraksts zem virsraksta" },
                        { key: "filterAll", label: "Filtrs - 'Visi'" },
                        { key: "filterEurope", label: "Filtrs - 'Eiropa'" },
                        { key: "filterExotic", label: "Filtrs - 'Eksotika'" },
                        { key: "durationLabel", label: "Skatīt kartītē: 'Ilgums'" },
                        { key: "viewLabel", label: "Kartītes poga 'Skatīt →'" },
                        { key: "noResults", label: "Kļūdas paziņojums, ja nekas nav atrasts" },
                        { key: "resetFilter", label: "Poga 'Rādīt visus'" },
                        { key: "modalClose", label: "Modālā loga poga 'Aizvērt'" },
                        { key: "modalDuration", label: "Modālā logā 'Ilgums:'" },
                        { key: "modalPriceFrom", label: "Modālā logā 'Cena no:'" },
                        { key: "modalRequestBtn", label: "Modālā loga pieteikuma poga" }
                      ].map(field => (
                        <div key={field.key} className={field.key === "subtitle" || field.key === "modalRequestBtn" ? "md:col-span-2" : "md:col-span-1"}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          {field.key === "subtitle" ? (
                            <textarea
                              rows={2}
                              value={translationsData[activeLangEdit].destinations?.[field.key] || ""}
                              onChange={e => updateTranslationValue("destinations", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          ) : (
                            <input
                              type="text"
                              value={translationsData[activeLangEdit].destinations?.[field.key] || ""}
                              onChange={e => updateTranslationValue("destinations", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-[#2C2B29]"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* INDIVIDUAL DESTINATIONS TEXT TRANSLATIONS (names/descriptions) */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-4">Galamērķu tulkojumi valstīm</h4>
                      <div className="space-y-4">
                        {destinations.map(d => {
                          const itemTrans = translationsData[activeLangEdit].destinations?.items?.[d.id] || { name: "", description: "", duration: "" };
                          return (
                            <div key={d.id} className="p-4 bg-gray-50/50 border border-gray-150 rounded-xl space-y-3">
                              <div className="flex items-center gap-2 border-b border-gray-150 pb-2">
                                <span className="text-base">{d.flag}</span>
                                <span className="font-bold text-gray-900 text-sm">{d.name} <span className="font-mono text-xs text-gray-400">({d.id})</span></span>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Valsts nosaukums šajā valodā</label>
                                  <input
                                    type="text"
                                    placeholder={d.name}
                                    value={itemTrans.name || ""}
                                    onChange={e => updateNestedTranslation((langData) => {
                                      if (!langData.destinations.items) langData.destinations.items = {};
                                      if (!langData.destinations.items[d.id]) langData.destinations.items[d.id] = { name: "", description: "", duration: "" };
                                      langData.destinations.items[d.id].name = e.target.value;
                                    })}
                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-gray-900 text-gray-800"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Ilgums šajā valodā</label>
                                  <input
                                    type="text"
                                    placeholder={d.duration}
                                    value={itemTrans.duration || ""}
                                    onChange={e => updateNestedTranslation((langData) => {
                                      if (!langData.destinations.items) langData.destinations.items = {};
                                      if (!langData.destinations.items[d.id]) langData.destinations.items[d.id] = { name: "", description: "", duration: "" };
                                      langData.destinations.items[d.id].duration = e.target.value;
                                    })}
                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Apraksts šajā valodā</label>
                                <textarea
                                  rows={2}
                                  placeholder={d.description}
                                  value={itemTrans.description || ""}
                                  onChange={e => updateNestedTranslation((langData) => {
                                    if (!langData.destinations.items) langData.destinations.items = {};
                                    if (!langData.destinations.items[d.id]) langData.destinations.items[d.id] = { name: "", description: "", duration: "" };
                                    langData.destinations.items[d.id].description = e.target.value;
                                  })}
                                  className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. FAQ Section */}
                {translationSection === "faq" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "badge", label: "BUJ - Mazais uzraksts" },
                        { key: "title", label: "BUJ - Galvenais virsraksts" },
                        { key: "subtitle", label: "Apraksts zem virsraksta" },
                        { key: "noAnswerTitle", label: "Aicinājums pajautāt (Virsraksts)" },
                        { key: "noAnswerDesc", label: "Aicinājums pajautāt (Apraksts)" },
                        { key: "askBtn", label: "Poga 'Uzdot jautājumu'" },
                        { key: "toHome", label: "Atpakaļ uz sākumu poga" }
                      ].map(field => (
                        <div key={field.key} className={field.key === "subtitle" || field.key === "noAnswerDesc" ? "md:col-span-2" : "md:col-span-1"}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          {field.key === "subtitle" || field.key === "noAnswerDesc" ? (
                            <textarea
                              rows={2}
                              value={translationsData[activeLangEdit].faq?.[field.key] || ""}
                              onChange={e => updateTranslationValue("faq", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          ) : (
                            <input
                              type="text"
                              value={translationsData[activeLangEdit].faq?.[field.key] || ""}
                              onChange={e => updateTranslationValue("faq", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* MANAGE FAQ ITEMS LIST */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Biežāk Uzdotie Jautājumi (BUJ Saraksts)</h4>
                        <button
                          onClick={() => updateNestedTranslation((langData) => {
                            if (!langData.faq.items) langData.faq.items = [];
                            langData.faq.items.push({ question: "Jauns Jautājums?", answer: "Atbilde..." });
                          })}
                          className="px-2.5 py-1 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <Plus className="w-3.5 h-3.5" /> Pievienot Jautājumu
                        </button>
                      </div>

                      <div className="space-y-4">
                        {(translationsData[activeLangEdit].faq?.items || []).map((item: any, idx: number) => (
                          <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3 relative">
                            <button
                              onClick={() => {
                                if (!confirm("Vai tiešām dzēst šo jautājumu?")) return;
                                updateNestedTranslation((langData) => {
                                  langData.faq.items.splice(idx, 1);
                                });
                              }}
                              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-500 rounded transition-colors cursor-pointer"
                              title="Dzēst jautājumu"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="pr-8">
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Jautājums #{idx + 1}</label>
                              <input
                                type="text"
                                value={item.question || ""}
                                onChange={e => updateNestedTranslation((langData) => {
                                  langData.faq.items[idx].question = e.target.value;
                                })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-gray-900 text-gray-800"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Atbilde #{idx + 1}</label>
                              <textarea
                                rows={3}
                                value={item.answer || ""}
                                onChange={e => updateNestedTranslation((langData) => {
                                  langData.faq.items[idx].answer = e.target.value;
                                })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Blog & Posts Section */}
                {translationSection === "blog" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { key: "badge", label: "Blogs - Mazais uzraksts" },
                        { key: "title", label: "Blogs - Galvenais virsraksts" },
                        { key: "subtitle", label: "Blogs - Apraksts" },
                        { key: "readMore", label: "Poga 'Lasīt vairāk'" },
                        { key: "sidebarPopular", label: "Sānu josla 'Populārākie raksti'" },
                        { key: "sidebarCategories", label: "Sānu josla 'Kategorijas'" },
                        { key: "sidebarAll", label: "Sānu josla 'Visi raksti'" },
                        { key: "toHome", label: "Poga 'Atpakaļ uz sākumu'" }
                      ].map(field => (
                        <div key={field.key} className={field.key === "subtitle" ? "md:col-span-2" : "md:col-span-1"}>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field.label}</label>
                          {field.key === "subtitle" ? (
                            <textarea
                              rows={2}
                              value={translationsData[activeLangEdit].blog?.[field.key] || ""}
                              onChange={e => updateTranslationValue("blog", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          ) : (
                            <input
                              type="text"
                              value={translationsData[activeLangEdit].blog?.[field.key] || ""}
                              onChange={e => updateTranslationValue("blog", field.key, e.target.value)}
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* MANAGE PUBLISHED BLOG POSTS LIST */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Publicētie raksti (Blog Posts)</h4>
                        <button
                          onClick={() => updateNestedTranslation((langData) => {
                            if (!langData.blog.posts) langData.blog.posts = [];
                            const newId = `jauns-raksts-${Date.now().toString().slice(-4)}`;
                            langData.blog.posts.push({ 
                              id: newId, 
                              title: "Jauns bloga raksts", 
                              desc: "Īss raksta kopsavilkums (tiks rādīts sarakstā)...", 
                              content: "Raksta galvenais saturs..." 
                            });
                          })}
                          className="px-2.5 py-1 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <Plus className="w-3.5 h-3.5" /> Pievienot Rakstu
                        </button>
                      </div>

                      <div className="space-y-4">
                        {(translationsData[activeLangEdit].blog?.posts || []).map((post: any, idx: number) => (
                          <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3 relative">
                            <button
                              onClick={() => {
                                if (!confirm("Vai tiešām dzēst šo rakstu?")) return;
                                updateNestedTranslation((langData) => {
                                  langData.blog.posts.splice(idx, 1);
                                });
                              }}
                              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-500 rounded transition-colors cursor-pointer"
                              title="Dzēst rakstu"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="md:col-span-1">
                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Raksta ID (Slug / Saite)</label>
                                <input
                                  type="text"
                                  value={post.id || ""}
                                  onChange={e => updateNestedTranslation((langData) => {
                                    langData.blog.posts[idx].id = e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                                  })}
                                  className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800 font-mono"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Raksta Virsraksts</label>
                                <input
                                  type="text"
                                  value={post.title || ""}
                                  onChange={e => updateNestedTranslation((langData) => {
                                    langData.blog.posts[idx].title = e.target.value;
                                  })}
                                  className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-gray-900 text-gray-800"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Īss kopsavilkums (Sarakstā)</label>
                              <textarea
                                rows={2}
                                value={post.desc || ""}
                                onChange={e => updateNestedTranslation((langData) => {
                                  langData.blog.posts[idx].desc = e.target.value;
                                })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Pilnais Saturs (Atbalsta jaunas rindiņas)</label>
                              <textarea
                                rows={6}
                                value={post.content || ""}
                                onChange={e => updateNestedTranslation((langData) => {
                                  langData.blog.posts[idx].content = e.target.value;
                                })}
                                className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-gray-900 text-gray-800 font-sans"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Default text inputs for other simpler sections */}
                {["contactPage", "contactForm", "footer", "cookieNotice"].includes(translationSection) && (
                  <div className="space-y-4">
                    {Object.keys(translationsData[activeLangEdit][translationSection] || {}).map(key => {
                      const val = translationsData[activeLangEdit][translationSection][key];
                      if (typeof val === "string") {
                        return (
                          <div key={key}>
                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{key}</label>
                            {val.length > 80 ? (
                              <textarea
                                rows={3}
                                value={val}
                                onChange={e => updateTranslationValue(translationSection, key, e.target.value)}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                              />
                            ) : (
                              <input
                                type="text"
                                value={val}
                                onChange={e => updateTranslationValue(translationSection, key, e.target.value)}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                              />
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            {/* GitHub Setup Card */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">GitHub un Netlify Sinhronizācija</h3>
                  <p className="text-xs text-gray-400 font-mono">Automātiskā publicēšana bez AI Studio</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                    GitHub Personal Access Token (PAT)
                  </label>
                  <input
                    type="password"
                    placeholder="ghp_..."
                    value={ghToken}
                    onChange={e => { setGhToken(e.target.value); setIsDirty(true); }}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 font-mono"
                  />
                  <span className="text-[10px] text-gray-400 mt-1 block">
                    Šis žetons ir nepieciešams, lai saglabātu labojumus pa tiešo jūsu GitHub repozitorijā. Tas tiek saglabāts <span className="font-semibold">tikai jūsu pārlūkā</span> un netiek pārsūtīts trešajām pusēm.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Repozitorija ceļš (owner/repo)
                    </label>
                    <input
                      type="text"
                      placeholder="lietotajvards/repozitorijs"
                      value={ghRepo}
                      onChange={e => { setGhRepo(e.target.value); setIsDirty(true); }}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Zars (Branch)
                    </label>
                    <input
                      type="text"
                      placeholder="main"
                      value={ghBranch}
                      onChange={e => { setGhBranch(e.target.value); setIsDirty(true); }}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800 font-mono"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-900 text-xs flex gap-2.5">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Kā iegūt GitHub tokenu?</span>
                    1. Dodieties uz savu GitHub profilu → <span className="font-semibold">Settings</span> → <span className="font-semibold">Developer Settings</span> → <span className="font-semibold">Personal Access Tokens (classic)</span>.<br />
                    2. Noklikšķiniet uz <span className="font-semibold">Generate new token</span>.<br />
                    3. Atzīmējiet <span className="font-semibold">repo</span> tvērumu (scopes) un noklikšķiniet uz Generate.<br />
                    4. Nokopējiet iegūto kodu un ielīmējiet to laukā augstāk!
                  </div>
                </div>
              </div>
            </div>

            {/* Account Credentials Update Card */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1.5">
                <Lock className="w-4.5 h-4.5" /> Mainīt CMS Ieejas Datus
              </h3>

              <form onSubmit={async (e) => {
                e.preventDefault();
                const mail = (e.currentTarget.elements.namedItem("new_email") as HTMLInputElement).value;
                const pass = (e.currentTarget.elements.namedItem("new_pass") as HTMLInputElement).value;
                const passConfirm = (e.currentTarget.elements.namedItem("new_pass_confirm") as HTMLInputElement).value;

                if (!mail || !pass) {
                  alert("Lūdzu aizpildiet visus laukus!");
                  return;
                }
                if (pass !== passConfirm) {
                  alert("Paroles nesakrīt!");
                  return;
                }

                const hash = await sha256(pass);
                localStorage.setItem("cms_local_email", mail);
                localStorage.setItem("cms_local_password_hash", hash);

                setCmsConfig({
                  adminEmail: mail,
                  adminPasswordHash: hash
                });

                setIsDirty(true);
                alert("Ieejas dati tika sagatavoti! Atcerieties noklikšķināt uz 'Publicēt uz GitHub', lai tie stātos spēkā visās ierīcēs!");
              }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Jaunais e-pasts</label>
                    <input
                      type="email"
                      name="new_email"
                      required
                      placeholder={cmsConfig?.adminEmail || "e-pasts"}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Jaunā parole</label>
                    <input
                      type="password"
                      name="new_pass"
                      required
                      placeholder="parole"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Atkārtot jauno paroli</label>
                    <input
                      type="password"
                      name="new_pass_confirm"
                      required
                      placeholder="parole"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-900 focus:bg-white text-gray-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Sagatavot jaunos datus
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
