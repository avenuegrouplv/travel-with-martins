import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs max-w-xl mx-auto">
      {status === 'success' ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="mx-auto w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{t('contacts.send')}</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">{t('contacts.success')}</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-all cursor-pointer"
          >
            Sūtīt vēlreiz
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2.5 animate-in slide-in-from-top-2">
              <AlertCircle size={16} />
              <span>{t('contacts.error')}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('contacts.name')} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl text-sm font-medium outline-hidden transition-all"
                placeholder="Kaspars"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('contacts.email')} *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl text-sm font-medium outline-hidden transition-all"
                placeholder="kaspars@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('contacts.subject')}</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl text-sm font-medium outline-hidden transition-all"
              placeholder="Sadarbības piedāvājums"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t('contacts.message')} *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl text-sm font-medium outline-hidden transition-all resize-none"
              placeholder="Sveiki! Vēlos aprunāties par..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold text-sm rounded-xl shadow-md shadow-teal-600/10 hover:shadow-lg hover:shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === 'sending' ? (
              <span>{t('contacts.sending')}</span>
            ) : (
              <>
                <Send size={16} />
                <span>{t('contacts.send')}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
