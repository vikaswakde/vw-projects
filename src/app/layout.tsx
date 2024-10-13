import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abhang Lyrics Animation",
  description:
    "An interactive lyrics animation for the Abhang 'Are Krishna Are Kanha' by Sant Eknath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansDevanagari.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
