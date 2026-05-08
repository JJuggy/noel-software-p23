import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOEL — Alert App",
  description: "P23 Africa business intelligence and alert platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-brn-navy text-brn-creamy antialiased">
        {children}
      </body>
    </html>
  );
}
