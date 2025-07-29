import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModernFooter from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { TawkScript } from "./tawk-script";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Proper place for SEO-related metadata
export const metadata: Metadata = {
  title: "Online Library Management System",
  description:
    "Manage books, users, and borrowings efficiently using Next.js and Azure.",
  authors: [{ name: "Shwetank Morey" }],
  keywords: [
    "library",
    "books",
    "Azure",
    "Next.js",
    "library management system",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TawkScript />
        <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-6">
          {children}
        </main>
        <ModernFooter />
        <Toaster />
      </body>
    </html>
  );
}
