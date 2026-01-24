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
    url: "https://spaceflight-tracker.vercel.app",
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
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' fill='%238B4513'%3E%3Cpath d='M192 384L88.5 384C63.6 384 48.3 356.9 61.1 335.5L114 247.3C122.7 232.8 138.3 224 155.2 224L250.2 224C326.3 95.1 439.8 88.6 515.7 99.7C528.5 101.6 538.5 111.6 540.3 124.3C551.4 200.2 544.9 313.7 416 389.8L416 484.8C416 501.7 407.2 517.3 392.7 526L304.5 578.9C283.2 591.7 256 576.3 256 551.5L256 448C256 412.7 227.3 384 192 384L191.9 384zM464 224C464 197.5 442.5 176 416 176C389.5 176 368 197.5 368 224C368 250.5 389.5 272 416 272C442.5 272 464 250.5 464 224z'/%3E%3C/svg%3E",
      },
    ],
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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
