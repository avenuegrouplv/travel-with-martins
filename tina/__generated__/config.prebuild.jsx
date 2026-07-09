// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "local-id",
  token: process.env.TINA_TOKEN || "local-token",
  contentApiUrlOverride: typeof window !== "undefined" && !process.env.TINA_CLIENT_ID ? "/graphql" : void 0,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "translations",
        label: "Translations (Valodas)",
        path: "content/translations",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Valodas nosaukums (piem. Latvie\u0161u)", required: true },
          {
            type: "object",
            name: "header",
            label: "Header Links (Navig\u0101cija)",
            fields: [
              { type: "string", name: "home", label: "Home (S\u0101kums)" },
              { type: "string", name: "collab", label: "Cooperation (Sadarb\u012Bba)" },
              { type: "string", name: "destinations", label: "Destinations (Galam\u0113r\u0137i)" },
              { type: "string", name: "faq", label: "FAQ (BUJ)" },
              { type: "string", name: "blog", label: "Blog (Blogs)" },
              { type: "string", name: "contacts", label: "Contacts (Kontakti)" },
              { type: "string", name: "contactBtn", label: "Contact Button (Poga)" }
            ]
          },
          {
            type: "object",
            name: "home",
            label: "Home Page (S\u0101kumlapa)",
            fields: [
              {
                type: "object",
                name: "heroSlides",
                label: "Hero Slides (Slaideris)",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title (Virsraksts)" },
                  { type: "string", name: "text", label: "Text (Apraksts)", ui: { component: "textarea" } },
                  { type: "string", name: "highlights", label: "Highlights (Izceltie v\u0101rdi)", list: true }
                ]
              },
              {
                type: "object",
                name: "quickStats",
                label: "Quick Stats Labels (Skait\u012Bt\u0101ji)",
                fields: [
                  { type: "string", name: "countries", label: "Countries Visited" },
                  { type: "string", name: "projects", label: "Routes Built" },
                  { type: "string", name: "clients", label: "Happy Clients" },
                  { type: "string", name: "rating", label: "Client Rating" }
                ]
              },
              { type: "string", name: "aboutBadge", label: "About Section Badge" },
              { type: "string", name: "aboutTitle", label: "About Title" },
              { type: "string", name: "aboutSubtitle", label: "About Subtitle" },
              { type: "string", name: "aboutIntro", label: "About Intro Text", ui: { component: "textarea" } },
              { type: "string", name: "aboutBody", label: "About Body Text", ui: { component: "textarea" } },
              { type: "string", name: "aboutQuote", label: "About Quote (M\u0101rti\u0146a cit\u0101ts)", ui: { component: "textarea" } },
              { type: "string", name: "advantagesBadge", label: "Advantages Section Badge" },
              { type: "string", name: "advantagesTitle", label: "Advantages Title" },
              {
                type: "object",
                name: "advantages",
                label: "Advantages List (Priek\u0161roc\u012Bbas)",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "stepsBadge", label: "Steps Section Badge" },
              { type: "string", name: "stepsTitle", label: "Steps Title" },
              { type: "string", name: "stepsSubtitle", label: "Steps Subtitle" },
              {
                type: "object",
                name: "steps",
                label: "Steps List (Sadarb\u012Bbas so\u013Ci s\u0101kumlap\u0101)",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "reviewsBadge", label: "Reviews Section Badge" },
              { type: "string", name: "reviewsTitle", label: "Reviews Title" },
              {
                type: "object",
                name: "reviews",
                label: "Reviews List (Atsauksmes)",
                list: true,
                fields: [
                  { type: "string", name: "author", label: "Author Name" },
                  { type: "string", name: "role", label: "Author Role/Status" },
                  { type: "string", name: "text", label: "Review Content", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "instaTitle", label: "Instagram Grid Title" },
              { type: "string", name: "instaSubtitle", label: "Instagram Grid Subtitle" }
            ]
          },
          {
            type: "object",
            name: "collab",
            label: "Cooperation Page (Sadarb\u012Bbas lapa)",
            fields: [
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Detailed Steps (Daudz detaliz\u0113t\u0101ki so\u013Ci)",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Step Title" },
                  { type: "string", name: "desc", label: "Step Full Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "bottomText1", label: "Bottom Text Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "bottomText2", label: "Bottom Text Paragraph 2", ui: { component: "textarea" } },
              { type: "string", name: "toHome", label: "To Home Button Label" }
            ]
          },
          {
            type: "object",
            name: "destinations",
            label: "Destinations Page Headers (Galam\u0113r\u0137u lapas teksti)",
            fields: [
              { type: "string", name: "toHome", label: "To Home Button" },
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "filterAll", label: "Filter Button: All" },
              { type: "string", name: "filterEurope", label: "Filter Button: Europe" },
              { type: "string", name: "filterExotic", label: "Filter Button: Exotic" },
              { type: "string", name: "durationLabel", label: "Duration Text Label" },
              { type: "string", name: "viewLabel", label: "View Button Label" },
              { type: "string", name: "noResults", label: "No Results Message" },
              { type: "string", name: "resetFilter", label: "Reset Filter Button" },
              { type: "string", name: "modalClose", label: "Modal Close Button" },
              { type: "string", name: "modalDuration", label: "Modal Duration Label" },
              { type: "string", name: "modalPriceFrom", label: "Modal Price From Label" },
              { type: "string", name: "modalRequestBtn", label: "Modal Consultation Button" },
              {
                type: "object",
                name: "items",
                label: "Localized Destination Details (Galam\u0113r\u0137u tulkojumi)",
                fields: [
                  {
                    type: "object",
                    name: "turcija",
                    label: "Turcija (Turkey)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "griekija",
                    label: "Grie\u0137ija (Greece)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "egipte",
                    label: "\u0112\u0123ipte (Egypt)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "spanija",
                    label: "Sp\u0101nija (Spain)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "kipra",
                    label: "Kipra (Cyprus)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "taizeme",
                    label: "Taizeme (Thailand)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "maldivu_salas",
                    label: "Mald\u012Bvu salas (Maldives)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "dominikana",
                    label: "Dominik\u0101na (Dominican Republic)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  },
                  {
                    type: "object",
                    name: "aae",
                    label: "Apvienotie Ar\u0101bu Emir\u0101ti (UAE)",
                    fields: [
                      { type: "string", name: "name", label: "Name" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "duration", label: "Duration" },
                      { type: "string", name: "tags", label: "Tags", list: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Page (BUJ jaut\u0101jumi)",
            fields: [
              { type: "string", name: "toHome", label: "To Home Button" },
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "noAnswerTitle", label: "No Answer Callout Title" },
              { type: "string", name: "noAnswerDesc", label: "No Answer Callout Desc", ui: { component: "textarea" } },
              { type: "string", name: "askBtn", label: "Ask Button Label" },
              {
                type: "object",
                name: "items",
                label: "FAQ Items (BUJ saraksts)",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "blog",
            label: "Blog Page (Blogs un Raksti)",
            fields: [
              { type: "string", name: "toHome", label: "To Home Button" },
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "readMore", label: "Read More Button" },
              { type: "string", name: "sidebarPopular", label: "Sidebar Popular Title" },
              { type: "string", name: "sidebarCategories", label: "Sidebar Categories Title" },
              { type: "string", name: "sidebarAll", label: "Sidebar All Posts Title" },
              {
                type: "object",
                name: "posts",
                label: "Blog Posts (Public\u0113tie raksti)",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "Post ID / Slug", required: true },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Short Description", ui: { component: "textarea" } },
                  { type: "string", name: "content", label: "Main Content", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "upcomingTitle", label: "Upcoming Section Title" },
              { type: "string", name: "upcomingSubtitle", label: "Upcoming Section Subtitle" },
              { type: "string", name: "upcomingReadSoon", label: "Upcoming Read Soon Button" },
              {
                type: "object",
                name: "upcomingPosts",
                label: "Upcoming Posts (Topo\u0161o rakstu pieteikumi)",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "contactPage",
            label: "Contact Page Info (Kontaktu lapas deta\u013Cas)",
            fields: [
              { type: "string", name: "toHome", label: "To Home Button" },
              { type: "string", name: "badge", label: "Section Badge" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "intro", label: "Introductory Text", ui: { component: "textarea" } },
              { type: "string", name: "hoursTitle", label: "Hours Card Title" },
              { type: "string", name: "hoursDesc1", label: "Hours Days Text" },
              { type: "string", name: "hoursDesc2", label: "Hours Time Text" },
              { type: "string", name: "locationTitle", label: "Location Card Title" },
              { type: "string", name: "locationDesc1", label: "Location City Text" },
              { type: "string", name: "locationDesc2", label: "Location Scope Text" },
              { type: "string", name: "supportTitle", label: "Support Card Title" },
              { type: "string", name: "supportDesc1", label: "Support Text Line 1" },
              { type: "string", name: "supportDesc2", label: "Support Text Line 2" }
            ]
          },
          {
            type: "object",
            name: "contactForm",
            label: "Contact Form labels (Sazi\u0146as forma)",
            fields: [
              { type: "string", name: "badge", label: "Form Badge" },
              { type: "string", name: "title", label: "Form Title" },
              { type: "string", name: "subtitle", label: "Form Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "successTitle", label: "Form Success Title" },
              { type: "string", name: "successDesc", label: "Form Success Desc" },
              { type: "string", name: "sendNew", label: "Send New Message Label" },
              { type: "string", name: "labelName", label: "Name Field Label" },
              { type: "string", name: "placeholderName", label: "Name Field Placeholder" },
              { type: "string", name: "labelPhone", label: "Phone Field Label" },
              { type: "string", name: "placeholderPhone", label: "Phone Field Placeholder" },
              { type: "string", name: "labelEmail", label: "Email Field Label" },
              { type: "string", name: "placeholderEmail", label: "Email Field Placeholder" },
              { type: "string", name: "labelMessage", label: "Message Field Label" },
              { type: "string", name: "placeholderMessage", label: "Message Field Placeholder" },
              { type: "string", name: "submitBtn", label: "Submit Button Label" },
              { type: "string", name: "infoTitle", label: "Info Section Title" },
              { type: "string", name: "phone", label: "Phone Contact Label" },
              { type: "string", name: "email", label: "Email Contact Label" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer Section (K\u0101jene)",
            fields: [
              { type: "string", name: "desc", label: "Footer Pitch Text", ui: { component: "textarea" } },
              { type: "string", name: "linksTitle", label: "Quick Links Header" },
              { type: "string", name: "contactsTitle", label: "Contacts Header" },
              { type: "string", name: "copyright", label: "Copyright text" }
            ]
          },
          {
            type: "object",
            name: "cookieNotice",
            label: "Cookie Notice (S\u012Bkdat\u0146u pazi\u0146ojums)",
            fields: [
              { type: "string", name: "text", label: "Banner Text", ui: { component: "textarea" } },
              { type: "string", name: "accept", label: "Accept Button" },
              { type: "string", name: "policy", label: "Policy Link Label" }
            ]
          }
        ]
      },
      {
        name: "destinations",
        label: "Destinations Cards (Galam\u0113r\u0137u kart\u012Btes)",
        path: "content/destinations",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Saraksta nosaukums", required: true },
          {
            type: "object",
            name: "destinations",
            label: "Destinations List",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID / Slug (Mazi burti, piem. turcija)", required: true },
              { type: "string", name: "name", label: "Name (Nosaukums)", required: true },
              { type: "string", name: "flag", label: "Flag Emoji (Karogs)" },
              { type: "string", name: "image", label: "Image URL (Att\u0113la saite)" },
              { type: "string", name: "description", label: "Description (Apraksts)", ui: { component: "textarea" } },
              { type: "string", name: "duration", label: "Duration (Ilgums)" },
              { type: "number", name: "price", label: "Price (Cena, tikai skaitlis)" },
              { type: "string", name: "tags", label: "Tags (Tagi)", list: true }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
