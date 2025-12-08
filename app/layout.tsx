import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/SessionProvider";
import Navbar from "./components/Navbar";
import { ToastProvider } from "./providers/ToasterProvider";

const inter = Inter({
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono", 
});

export const metadata: Metadata = {
  title: "Your stoic companion",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className={`${ibmPlexMono.className} antialiased`}>
        <Providers>
        <ToastProvider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
