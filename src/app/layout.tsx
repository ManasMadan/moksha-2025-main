import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moksha NSUT | 2025",
  description: "The official website of Moksha NSUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
