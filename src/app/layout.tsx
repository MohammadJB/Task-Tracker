import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/providers/themeProvider";
import TaskProvider from "@/providers/taskProvider";
import { ChakraProvider } from "@chakra-ui/react";

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
          <ChakraProvider>
            <TaskProvider>
              <Header />
              <main className="max-w-screen-xl mx-auto p-6">{children}</main>
            </TaskProvider>
          </ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
