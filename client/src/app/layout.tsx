import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realtime Voting app",
  description: "This real-time voting app built with Next.js lets you create topics, discuss options, and vote with instant results.  See everyone's votes update live for a truly collaborative experience. Perfect for brainstorming, group projects, or just having fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
