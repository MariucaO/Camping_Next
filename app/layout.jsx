import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Cormorant_Garamond, Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "./context/LanguageContext"; // <--- Importă asta

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Camping Grădina cu flori | Brezoi",
  description: "Livadă camping, zone delimitate, hamace și natură pe Valea Lotrului.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={`${cormorant.variable} ${inter.variable} font-sans relative min-h-screen`}>
        <LanguageProvider> {/* <--- Începe aici */}
          <Navbar />
          <main>{children}</main>
          <BackToTop />
          <WhatsAppButton />
          <Footer />
        </LanguageProvider> {/* <--- Se termină aici */}
      </body>
    </html>
  );
}