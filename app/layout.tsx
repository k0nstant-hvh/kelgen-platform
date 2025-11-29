import type { Metadata } from "next";
// Если у тебя шрифт называется по-другому, VS Code подчеркнет Inter.
// Обычно это: import { Inter } from "next/font/google";
// Но по умолчанию сейчас often use local fonts (Geist). 
// Давай сделаем универсально:
import { Inter } from "next/font/google"; 
import "./globals.css";

// ВНИМАНИЕ: Проверь, чтобы пути были именно такие:
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KelGen Platform",
  description: "Youth Charity Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}