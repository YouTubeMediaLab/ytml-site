import type { Metadata } from "next";
import AcquisitionLandingPage from "@/components/lp/AcquisitionLandingPage";
import { OG_IMAGE, SITE_URL } from "@/config/brand";

export const metadata: Metadata = {
  title: "SNSを売上につなげる仕組みを学ぶ | SNS Media Lab",
  description:
    "Instagram・Threads・X・TikTok・YouTubeなどのSNS運用から、商品設計、LINEを含む販売導線、セールスまでを一貫して学べるオンラインスクールです。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "SNSを、売上を生む仕組みへ。 | SNS Media Lab",
    description:
      "集客だけで終わらせない。商品設計・SNS運用・マーケティング・セールスまでを一つの流れで学べます。",
    type: "website",
    locale: "ja_JP",
    url: `${SITE_URL}/lp/sns`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "SNS Media Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNSを、売上を生む仕組みへ。 | SNS Media Lab",
    description:
      "Instagram・Threads・X・TikTok・YouTubeから、商品設計・集客・販売までを一貫して学べます。",
    images: [OG_IMAGE],
  },
};

export default function SocialLandingPage() {
  return <AcquisitionLandingPage source="social" />;
}
