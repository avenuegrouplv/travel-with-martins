import { defineConfig } from "tinacms";

// Your hosting provider name for one-click deploys
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token",

  build: {
    outputFolder: "admin",
    publicFolder: "dist", // Vite uses dist for output
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // Content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title (Latvian)",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title_en",
            label: "Title (English)",
          },
          {
            type: "string",
            name: "title_ru",
            label: "Title (Russian)",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt (Latvian)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body (Latvian)",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "body_en",
            label: "Body (English)",
          },
          {
            type: "rich-text",
            name: "body_ru",
            label: "Body (Russian)",
          },
        ],
      },
    ],
  },
});
