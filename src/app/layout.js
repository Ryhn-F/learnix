import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learnix - Smart Learning for the Future",
  description: "Platform pembelajaran pintar berbasis AI untuk generasi masa depan. Technology for New Era.",
  keywords: "AI learning, smart education, technology, future learning, e-learning, online education",
  authors: [{ name: "Learnix Team" }],
  openGraph: {
    title: "Learnix - Smart Learning for the Future",
    description: "Platform pembelajaran pintar berbasis AI untuk generasi masa depan",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnix - Smart Learning for the Future",
    description: "Platform pembelajaran pintar berbasis AI untuk generasi masa depan",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
