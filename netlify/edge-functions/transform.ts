import { Context } from "@netlify/edge-functions";

export default async function handler(request: Request, context: Context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const text = await response.text();
  const modifiedText = text.replace(
    /<\/head>/i,
    `<script src="https://app.netlify.com/visual-editor/inject.js"></script></head>`,
  );

  return new Response(modifiedText, {
    status: response.status,
    headers: response.headers,
  });
}
