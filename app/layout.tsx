import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOBILISE - Operational Readiness System",
  description: "Distributed Operational Readiness System for NS Mobilisation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
