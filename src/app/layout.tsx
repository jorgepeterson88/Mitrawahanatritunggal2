import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV MITRA WAHANA TRITUNGGAL - Solusi Transportasi & Logistik Profesional",
  description: "CV MITRA WAHANA TRITUNGGAL menyediakan layanan transportasi, logistik, dan konsultasi bisnis profesional di Pematangsiantar. Mitra terpercaya untuk solusi pengiriman barang Anda.",
  keywords: ["CV MITRA WAHANA TRITUNGGAL", "transportasi", "logistik", "pengiriman barang", "Pematangsiantar", "Sumatera Utara", "ekspedisi", "konsultasi bisnis"],
  authors: [{ name: "CV MITRA WAHANA TRITUNGGAL" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV MITRA WAHANA TRITUNGGAL - Solusi Transportasi & Logistik",
    description: "Mitra terpercaya untuk layanan transportasi dan logistik profesional di Indonesia",
    url: "https://mitra-wahana.com",
    siteName: "CV MITRA WAHANA TRITUNGGAL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV MITRA WAHANA TRITUNGGAL",
    description: "Solusi transportasi dan logistik profesional di Pematangsiantar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
