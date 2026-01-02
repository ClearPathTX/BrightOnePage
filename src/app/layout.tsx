import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Mission Recovery | Luxury Addiction Treatment in Acton, CA",
  description: "Bright Mission Recovery is a substance use disorder treatment center providing detox, residential treatment, and rehabilitation for individuals struggling with drug and alcohol addiction in Acton, California.",
  keywords: "addiction treatment, drug rehab, alcohol rehab, detox, residential treatment, Acton California, substance abuse, recovery center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
