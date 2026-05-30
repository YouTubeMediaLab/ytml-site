import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YouTube Media Lab | 動画編集・非属人YouTube運営スクール",
  description:
    "YouTube Media Labは、Adobe Premiere Proによる動画編集と、顔出し不要の非属人YouTubeチャンネル運営を体系的に学べるオンラインスクールです。撮影機材不要・在宅で学べます。",
  keywords: [
    "動画編集スクール",
    "非属人YouTube",
    "顔出し不要YouTube",
    "Adobe Premiere Pro",
    "オンラインスクール",
    "副業",
    "動画クリエイター",
    "YouTube Media Lab",
  ],
  openGraph: {
    title: "YouTube Media Lab | 動画編集・非属人YouTube運営スクール",
    description:
      "顔出し不要・撮影機材不要。Adobe Premiere Proによる動画編集とYouTubeチャンネル運営を体系的に学べるオンラインスクール。",
    type: "website",
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4Q5JL9Q3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J4Q5JL9Q3F');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
