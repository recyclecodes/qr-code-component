import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR Code preview card component",
  description: "Newbie challenge from Fontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </head>
      <body
        className={`bg-light-gray text-dark-blue flex flex-col justify-center items-center min-h-screen min-w-screen ${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
