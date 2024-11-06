import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from "@/components/theme";
import ReactQueryProvider from "@/react-query";
import { ReduxProvider } from "@/redux/slices/provider";
import { Toaster } from "sonner";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Opal",
  description: "Share AI powered videos with your friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
                <Toaster/>
              </ReactQueryProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
    
  );
}
