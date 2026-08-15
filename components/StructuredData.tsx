import { BRAND, OG_IMAGE, SITE_URL } from "@/config/brand";
import { COURSES, PRIVATE_CONSULTING, withTax } from "@/config/offer";

/**
 * 構造化データ（JSON-LD）。
 *
 * 検索結果でスクールとして正しく認識されるよう、
 * Organization / EducationalOrganization、提供コース、FAQ を出力する。
 * 表示中の内容と食い違うと逆効果になるため、値はすべて config から引く。
 */
export default function StructuredData({
  faqs,
}: {
  faqs?: { q: string; a: string }[];
}) {
  const courseList = [
    ...Object.values(COURSES).map((course) => ({
      "@type": "Course",
      name: course.name,
      description: course.positioning,
      provider: { "@type": "Organization", name: BRAND.name, sameAs: SITE_URL },
      offers: {
        "@type": "Offer",
        price: withTax(course.currentPriceExTax),
        priceCurrency: "JPY",
        category: "Paid",
        availability: "https://schema.org/InStock",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: `P${course.supportPeriod === "1年間" ? "1Y" : "6M"}`,
      },
    })),
    {
      "@type": "Course",
      name: PRIVATE_CONSULTING.name,
      description: PRIVATE_CONSULTING.positioning,
      provider: { "@type": "Organization", name: BRAND.name, sameAs: SITE_URL },
    },
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.name,
      alternateName: BRAND.nameJa,
      url: SITE_URL,
      logo: `${SITE_URL}/images/yml-icon.jpg`,
      image: OG_IMAGE,
      description:
        "顔出し不要の非属人YouTube運営を軸に、動画編集・外注化・SNSマーケティング・セールスまでを学べるオンラインスクールです。",
      email: BRAND.email,
      telephone: BRAND.tel,
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        addressRegion: "東京都",
        streetAddress: BRAND.address,
      },
      founder: { "@type": "Person", name: BRAND.representative },
      parentOrganization: { "@type": "Organization", name: BRAND.legalName },
      knowsAbout: [
        "非属人YouTube",
        "SNSマーケティング",
        "Instagramマーケティング",
        "Threadsマーケティング",
        "動画編集",
        "セールスライティング",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "コース一覧",
        itemListElement: courseList,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND.name,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
