import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/providers/themeProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "Manage all your tasks in one tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
