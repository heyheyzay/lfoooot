import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Footfolio - Discover the Best Football Tools",
  description: "A curated directory of the best football tools, platforms, and resources for fans, analysts, bettors, and professionals.",
  keywords: ["football", "soccer", "tools", "directory", "analytics", "fantasy football", "betting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
