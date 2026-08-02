import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mollika Akter — Frontend Developer",
  description: "Building modern, scalable, and beautiful web experiences. Explore the portfolio of Mollika Akter, a senior frontend engineer specializing in Next.js, React, and TypeScript.",
  keywords: ["Mollika Akter", "Frontend Developer", "Senior Frontend Engineer", "Next.js Developer", "React Developer", "UI/UX Developer", "Web Developer Portfolio"],
  authors: [{ name: "Mollika Akter" }],
  openGraph: {
    title: "Mollika Akter — Frontend Developer",
    description: "Building modern, scalable, and beautiful web experiences.",
    url: "https://mollika.dev",
    siteName: "Mollika Akter Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="mesh-gradient"></div>
            <div className="grid-overlay"></div>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
