import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script from next/script
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

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KFWBKDN');
            `,
          }}
        />

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
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body className={`font-sf-rounded`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KFWBKDN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
