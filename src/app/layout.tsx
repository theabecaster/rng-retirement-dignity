import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
