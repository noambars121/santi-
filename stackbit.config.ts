import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.5.0",
  ssgName: "custom",
  nodeVersion: "18",
  buildCommand: "npm run build",
  devCommand: "npm run dev",
  dev: {
    port: 3000,
    serverUrl: "http://localhost:3000",
  },
  experimental: {
    ssg: {
      name: "vite",
      devCommand: "npm run dev",
      buildCommand: "npm run build",
      devBrowser: false,
      publishDir: "dist",
    },
  },
  contentSources: [
    {
      name: "git",
      rootPath: ".",
      contentDirs: ["content"],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/home.json",
          layout: "Home",
          hideContent: true,
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "heroTitle", type: "string" },
            { name: "heroSubtitle", type: "string" },
            { name: "heroImage", type: "image" },
            {
              name: "stats",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "number", type: "string" },
                  { name: "label", type: "string" },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  pageLayouts: [
    {
      name: "Home",
      source: "src/components/home.tsx",
    },
  ],
});
