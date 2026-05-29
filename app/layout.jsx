import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Cormorant_Garamond, Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";

// 1. Definitie Fonturi
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// 2. Metadata
export const metadata = {
  title: "Camping Grădina cu flori | Brezoi",
  description:
    "Livadă camping, zone delimitate, hamace și natură pe Valea Lotrului. La 10 minute de Blues Festival.",
};

// 3. Functia RootLayout obligatorie
export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="relative min-h-screen">
        <Navbar />
        <main>{children}</main>
        <BackToTop />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
