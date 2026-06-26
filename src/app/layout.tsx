import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexyrium | Premium Advisory & Automation Consultancy",
  description: "Nexyrium delivers bespoke strategic consulting, AI automation architectures, and database execution plans for elite enterprises worldwide.",
  keywords: ["Consultancy", "Strategic Advisor", "AI Automation", "Luxury Brand", "Nexyrium"],
  icons: {
    icon: "/nexyrium.jpeg",
    shortcut: "/nexyrium.jpeg",
    apple: "/nexyrium.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased selection:bg-amber-500/30 selection:text-amber-200", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-zinc-100 font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
