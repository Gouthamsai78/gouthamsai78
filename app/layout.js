import "./globals.css";

export const metadata = {
  title: "Goutham Sai — Pivot or Perish",
  description:
    "16-year-old AI Developer and founder of Guys Media. Building the future with AI — PromptShare, AI Coder, Jarvis, and more.",
  keywords: [
    "Goutham Sai",
    "AI Developer",
    "AI Coder",
    "PromptShare",
    "Guys Media",
    "Portfolio",
  ],
  authors: [{ name: "Goutham Sai" }],
  openGraph: {
    title: "Goutham Sai — Pivot or Perish",
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
