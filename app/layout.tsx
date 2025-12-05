import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import ReduxProvider from "@/components/myComponents/reduxProvider/reduxProvider";
import { ToastContainer } from "react-toastify";

import { Montserrat } from "next/font/google";
import ClientOnly from "@/components/myComponents/ClientOnly";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Premium car rental service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="antialiased font-sans bg-white text-[#1a1a1a]">
        <main className="max-w-[1400px] mx-auto">
          <ReduxProvider>

            <ClientOnly>
              <Navbar />
            </ClientOnly>

            {children}

            <ClientOnly>
              <Footer />
            </ClientOnly>

          </ReduxProvider>

          <ToastContainer theme="light" />
        </main>
      </body>
    </html>
  );
}
