import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudentView",
  description:
    "Companion app for managing student life developed by ninetynine digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta
          name="description"
          content="Companion app for managing student life developed by ninetynine digital."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="StudentView" />
        <meta
          property="og:description"
          content="Companion app for managing student life developed by ninetynine digital."
        />
        <meta property="og:image" content="/preview.jpeg" />
        <meta property="og:url" content="https://studentview.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="StudentView" />
        <meta
          name="twitter:description"
          content="Companion app for managing student life developed by ninetynine digital."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/path/to/preview-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`font-sf-rounded`}>{children}</body>
    </html>
  );
}
