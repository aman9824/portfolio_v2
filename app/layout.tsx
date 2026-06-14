import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Aman Patel — Forward-Deployed AI Engineer";
const description =
  "Customer-embedded software engineer shipping production GenAI on Claude — multi-agent systems, MCP, and evals for Fortune-50 enterprises. TN-visa eligible, open to US relocation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanpatel.vercel.app"),
  title,
  description,
  keywords: [
    "Forward Deployed Engineer",
    "Applied AI",
    "Anthropic Claude",
    "Claude Agent SDK",
    "Model Context Protocol",
    "MCP",
    "multi-agent systems",
    "LLM evaluation",
    "RAG",
    "AI Engineer",
    "Aman Patel",
  ],
  authors: [{ name: "Aman Patel" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://amanpatel.vercel.app",
    siteName: "Aman Patel",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0E1F30",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
