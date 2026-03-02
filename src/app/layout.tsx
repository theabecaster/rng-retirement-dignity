import type { Metadata, Viewport } from "next";
import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader-var",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-var",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C3829",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rngretirementdignity.com"
  ),
  title: "RNG Retirement Dignity | Education. Clarity. Dignity.",
  description:
    "RNG Retirement Dignity helps individuals, families, and public servants navigate life insurance, retirement income, Medicare, and long-term planning — with clarity, not pressure.",
  applicationName: "RNG Retirement Dignity",
  authors: [{ name: "Roberto N. Garcia" }],
  keywords: [
    "retirement planning",
    "life insurance education",
    "Medicare",
    "Medicare Advantage",
    "annuities",
    "retirement income",
    "long-term care",
    "financial education",
    "RNG Retirement Dignity",
    "Roberto Garcia",
  ],
  openGraph: {
    title: "RNG Retirement Dignity",
    description:
      "Education-first retirement and insurance planning for individuals, families, and public servants — with clarity, not pressure.",
    type: "website",
    locale: "en_US",
    siteName: "RNG Retirement Dignity",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNG Retirement Dignity",
    description:
      "Education-first retirement and insurance planning — with clarity, not pressure.",
  },
  appleWebApp: {
    capable: true,
    title: "RNG Dignity",
    statusBarStyle: "black-translucent",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${outfit.variable}`}>
      <body className="font-outfit antialiased">{children}</body>
    </html>
  );
}
