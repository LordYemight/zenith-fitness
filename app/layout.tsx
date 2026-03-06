import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const heading = Oswald({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-heading" 
});

const body = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Zenith Fitness | Unleash Your Apex Potential",
  description: "Elite, personalized fitness and nutrition coaching designed for peak performance and uncompromising results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}