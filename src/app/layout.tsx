import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/providers/themeProvider";
import TaskProvider from "@/providers/taskProvider";
import MUIProvider from "@/providers/muiProvider";

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
          <MUIProvider>
            <TaskProvider>
              <div className="h-screen flex flex-col overflow-clip">
                <Header />
                <main className="flex-1 overflow-y-auto">
                  <div className="max-w-screen-xl mx-auto px-4">{children}</div>
                </main>
              </div>
            </TaskProvider>
          </MUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
