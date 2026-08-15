import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import StructuredData from "@/components/StructuredData";
import { FAQS } from "@/config/faq";
import { OG_IMAGE, SITE_URL } from "@/config/brand";

export const metadata: Metadata = {
  title: "SNS Media Lab | SNSマーケティング・非属人YouTube運営スクール",
  description:
    "SNS Media Labは、動画編集・顔出し不要の非属人YouTube運営・外注化・マーケティング・セールスまでを体系的に学べるオンラインスクールです。身につけた型は他のSNSにも匿名のまま横展開できます。撮影機材不要・在宅で学べます。",
  keywords: [
    "SNSマーケティング",
    "SNS運用",
    "動画編集スクール",
    "非属人YouTube",
    "顔出し不要YouTube",
    "セールスライティング",
    "Adobe Premiere Pro",
    "オンラインスクール",
    "副業",
    "SNS Media Lab",
  ],
  openGraph: {
    title: "SNS Media Lab | SNSマーケティング・非属人YouTube運営スクール",
    description:
      "顔出し不要・撮影機材不要。YouTubeを入口に、動画編集・外注化・マーケティング・セールスまで学べるオンラインスクール。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.youtubemedialab.com",
    siteName: "SNS Media Lab",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "顔も、声も、名前も出さずに。SNSを、もう一つの収入源へ。- SNS Media Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNS Media Lab | SNSマーケティング・非属人YouTube運営スクール",
    description:
      "顔出し不要・撮影機材不要。YouTubeを入口に、SNSマーケティングとセールスまで学べるオンラインスクール。",
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
