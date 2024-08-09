import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudentView - Your Student Life Companion",
  description:
    "StudentView is a powerful app developed by ninetynine digital to help students manage their academic and personal lives with ease.",
  keywords:
    "student app, student productivity, college app, budgeting for students, student note-taking, study app, college life, student life management",
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

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="StudentView is a powerful app developed by ninetynine digital to help students manage their academic and personal lives with ease."
        />
        <meta
          name="keywords"
          content="student app, student productivity, college app, budgeting for students, student note-taking, study app, college life, student life management"
        />
        <meta name="author" content="ninetynine digital" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="StudentView - Your Student Life Companion"
        />
        <meta
          property="og:description"
          content="StudentView is a powerful app developed by ninetynine digital to help students manage their academic and personal lives with ease."
        />
        <meta property="og:image" content="/preview.jpeg" />
        <meta property="og:url" content="https://www.studentview.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="StudentView - Your Student Life Companion"
        />
        <meta
          name="twitter:description"
          content="StudentView is a powerful app developed by ninetynine digital to help students manage their academic and personal lives with ease."
        />
        <meta
          name="twitter:image"
          content="https://www.studentview.app/path/to/preview-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.studentview.app",
            name: "StudentView",
            description:
              "StudentView is a powerful app developed by ninetynine digital to help students manage their academic and personal lives with ease.",
            publisher: {
              "@type": "Organization",
              name: "ninetynine digital",
            },
          })}
        </script>
      </head>
      <body className={`font-sf-rounded`}>{children}</body>
    </html>
  );
}
