import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Spaceflight Tracker - Real-Time Space Launch Schedule",
    template: "%s | Spaceflight Tracker",
  },
  description: "Track upcoming space launches in real-time from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. View live countdowns, rocket specifications, and launch locations worldwide.",
  keywords: ["space launches", "rocket launches", "SpaceX", "NASA", "Blue Origin", "ISRO", "CNSA", "launch schedule", "space news", "rocket tracker", "launch countdown"],
  authors: [{ name: "Spaceflight Tracker" }],
  creator: "Spaceflight Tracker",
  publisher: "Spaceflight Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.spaceflight-tracker.com",
    title: "Spaceflight Tracker - Real-Time Space Launch Schedule",
    description: "Track upcoming space launches in real-time from SpaceX, NASA, Blue Origin, ISRO, CNSA and more. View live countdowns, rocket specifications, and launch locations worldwide.",
    siteName: "Spaceflight Tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spaceflight Tracker - Real-Time Space Launch Schedule",
    description: "Track upcoming space launches in real-time from SpaceX, NASA, Blue Origin, ISRO, CNSA and more.",
    creator: "@spaceflighttracker",
  },
  icons: {
    icon: [
      { url: "/logo.jpg", sizes: "any" },
    ],
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1f2937",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WQJPYRCWZ5" suppressHydrationWarning></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WQJPYRCWZ5');
            `,
          }}
          suppressHydrationWarning
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8079361631746336"
          crossOrigin="anonymous"
          suppressHydrationWarning
        ></script>

        {/* Media.net Script - Uncomment and add your Customer ID after approval */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window._mNHandle = window._mNHandle || {};
              window._mNHandle.queue = window._mNHandle.queue || [];
              medianet_versionId = "3121199";
            `,
          }}
          suppressHydrationWarning
        />
        <script
          src="https://contextual.media.net/dmedianet.js?cid=YOUR_CUSTOMER_ID_HERE"
          async
          suppressHydrationWarning
        ></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Spaceflight Tracker",
              "url": "https://www.spaceflight-tracker.com",
              "description": "Track upcoming space launches in real-time from SpaceX, NASA, Blue Origin, ISRO, CNSA and more.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.spaceflight-tracker.com/launches?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Spaceflight Tracker",
              "url": "https://www.spaceflight-tracker.com",
              "logo": "https://www.spaceflight-tracker.com/icon-512.png",
              "sameAs": []
            })
          }}
          suppressHydrationWarning
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
