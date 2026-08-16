import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import StructuredData from "@/components/StructuredData";
import { FAQS } from "@/config/faq";
import { OG_IMAGE, SITE_URL } from "@/config/brand";

export const metadata: Metadata = {
  title: "SNS Media Lab | 商品設計からSNS集客・セールスまで学べるスクール",
  description:
    "SNS Media Labは、商品設計、Instagram・Threads・X・TikTok・YouTubeなどのSNS運用、LINEを含む販売導線、セールスまでを一貫して学べるオンラインスクールです。商品がない方も未経験から相談できます。",
  keywords: [
    "SNSマーケティング",
    "SNS運用",
    "商品設計",
    "LINE構築",
    "動画編集スクール",
    "非属人YouTube",
    "顔出し不要YouTube",
    "セールスライティング",
    "Adobe Premiere Pro",
    "オンラインスクール",
    "副業",
    "SNS Media Lab",
  ],
  icons: {
    icon: "/images/sml-icon.png",
    shortcut: "/images/sml-icon.png",
    apple: "/images/sml-icon.png",
  },
  openGraph: {
    title: "SNS Media Lab | SNSを、売上を生む仕組みへ。",
    description:
      "商品設計・SNS運用・販売導線・セールスまで。集客だけで終わらないSNSマーケティングを学べるオンラインスクール。",
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "SNS Media Lab",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SNSを、売上を生む仕組みへ。- SNS Media Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNS Media Lab | SNSを、売上を生む仕組みへ。",
    description:
      "商品設計・SNS運用・販売導線・セールスまでを一貫して学べるオンラインスクール。",
    images: [OG_IMAGE],
  },
  // 相対パスのOG画像などを絶対URLに解決させる
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
        <StructuredData faqs={FAQS} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
