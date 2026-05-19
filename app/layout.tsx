import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOBILISE - Smart Mobilisation Platform",
  description: "Mobilisation preparation and readiness platform designed around validated NS workflow friction points",
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
