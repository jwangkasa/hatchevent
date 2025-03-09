import type { Metadata } from "next";
import { Geist, Geist_Mono, Parisienne } from "next/font/google";
import "./globals.css";
import ClarityScript from "./components/ClarityScript";
import GoogleTagManager from "./components/GoogleTagManager";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400", // Parisienne only has a 400 weight
});

export const metadata: Metadata = {
  title: "Hatch Event AI",
  description: "The next generation of AI for event marketplaces and portals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ClarityScript />
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parisienne.variable} antialiased`}
      >

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFR5FJ5H"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      {children}
      </body>
    </html>
  );
}
