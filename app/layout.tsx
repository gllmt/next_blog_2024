import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/providers/theme-provider";
import Footer from "@/components/footer";
import QueryProvider from "@/providers/query-provider";
import AuthProvider from "@/providers/auth-provider";
import LenisSmoothScroll from "@/components/lenis-smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Blog for Reeact developpers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisSmoothScroll>
          <QueryProvider>
            <AuthProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="flex flex-col justify-between min-h-screen">
                  <Header />
                  <div className="flex-grow">
                    {children}
                  </div>
                  <Footer />
                </div>
              </ThemeProvider>
            </AuthProvider>
          </QueryProvider>
        </LenisSmoothScroll>
      </body>
    </html>
  );
}
