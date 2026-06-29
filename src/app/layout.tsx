import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/components/Providers";
import Chatbot from "@/components/Chatbot";
import PageTransition from "@/components/PageTransition";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ASCENDIA | Premium Digital Excellence",
  description: "Elevating brands through premium digital experiences and strategic innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cormorant.variable} font-sans selection:bg-[#C6A87C]/30 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] grain-overlay" />
        <Providers>
          <SmoothScroll>
            <Navigation />
            <main className="relative min-h-screen">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
            <Chatbot />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
