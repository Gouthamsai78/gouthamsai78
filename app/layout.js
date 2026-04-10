import "./globals.css";

export const metadata = {
  title: "Gautam Sai — Pivot or Perish",
  description:
    "16-year-old AI Developer and founder of Guys Media. Building the future with AI — PromptShare, AI Coder, Jarvis, and more.",
  keywords: [
    "Gautam Sai",
    "AI Developer",
    "AI Coder",
    "PromptShare",
    "Guys Media",
    "Portfolio",
  ],
  authors: [{ name: "Gautam Sai" }],
  openGraph: {
    title: "Gautam Sai — Pivot or Perish",
    description:
      "16-year-old AI Developer. Building the future with AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
