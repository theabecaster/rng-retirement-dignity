import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "RNG Retirement Dignity | Education. Clarity. Dignity.",
  description:
    "RNG Retirement Dignity helps individuals, families, and public servants navigate life insurance, retirement income, Medicare, and long-term planning — with clarity, not pressure.",
  openGraph: {
    title: "RNG Retirement Dignity",
    description: "Education-first retirement and insurance planning.",
    type: "website",
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
