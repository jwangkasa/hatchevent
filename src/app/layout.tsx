import type { Metadata } from "next";
import { Geist, Geist_Mono, Parisienne } from "next/font/google";
import "./globals.css";
import ClarityScript from "./components/ClarityScript";
import GoogleTagManager from "./components/GoogleTagManager";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Tag Manager and Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FH0EWNXHSD"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FH0EWNXHSD');
            `,
          }}
        />

        {/* Render the Clarity Script */}
        <ClarityScript />

        {/* Render Google Tag Manager (including noscript) */}
        <GoogleTagManager />

        {/* Render Google Analytics (including noscript) */}
        <GoogleAnalytics />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parisienne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
