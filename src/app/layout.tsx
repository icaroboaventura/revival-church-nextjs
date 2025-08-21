import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { contact } from "@/actions/fetchPublicData";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revival Church",
  keywords: ["Revival Church", "Kirche", "Gemeinde", "Glauben", "Glaube", "Jesus", "Christus"],
  authors: [{ name: "Revival Church", url: "https://revivalchurch.eu" }],
  creator: "Revival Church",
  openGraph: {
    title: "Revival Church",
    description: "Revival Church - Eine Gemeinschaft des Glaubens",
    url: "https://revivalchurch.eu",
    siteName: "Revival Church",
  },
  description:
    "Willkommen bei der Revival Church - einer Gemeinschaft des Glaubens, die sich der Verbreitung der Liebe und Botschaft Jesu Christi verschrieben hat. Hier finden Sie Inspiration, Gemeinschaft und Unterstützung auf Ihrem Glaubensweg.",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const contactData = await contact();

  if (!contactData) {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold">Website wird geladen...</h1>
      </div>
    );
  }

  return (
    <html lang="de" data-theme="revival">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter text-secondary antialiased`}
      >
        <header>
          <Navbar props={contactData} />
        </header>
        <main>{children}</main>
        <Footer props={contactData} />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
