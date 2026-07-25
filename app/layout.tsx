import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const githubPagesBasePath =
  process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "qoz-lab-kz"}`
    : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QOS LAB — AI-автоматизация для бизнеса",
  description:
    "Находим, где бизнес теряет клиентов, и автоматизируем рост. AI, CRM, процессы и SaaS для компаний Казахстана.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${githubPagesBasePath}/favicon.svg`,
    shortcut: `${githubPagesBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
