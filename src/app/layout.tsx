import type { Metadata, Viewport } from "next";
import { Cormorant, Sora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant-var",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-var",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C1F3F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://rngretirementdignity.com"
  ),
  title: "Retirement Dignity Group | Education. Clarity. Dignity.",
  description:
    "Retirement Dignity Group helps individuals, families, and public servants navigate life insurance, retirement income, Medicare, and long-term planning — with clarity, not pressure.",
  applicationName: "Retirement Dignity Group",
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
    "Retirement Dignity Group",
    "RNG Insurance Group",
    "Roberto Garcia",
  ],
  openGraph: {
    title: "Retirement Dignity Group",
    description:
      "Education-first retirement and insurance planning for individuals, families, and public servants — with clarity, not pressure.",
    type: "website",
    locale: "en_US",
    siteName: "Retirement Dignity Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Dignity Group",
    description:
      "Education-first retirement and insurance planning — with clarity, not pressure.",
  },
  appleWebApp: {
    capable: true,
    title: "RDG",
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
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <body className="font-sora antialiased">{children}</body>
    </html>
  );
}
