import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | SNS Media Lab",
  description: "SNS Media Labの利用規約ページです。",
};

const sections = [
  {
    title: "秘密保持・知的財産保護について",
    content:
      "契約時にご同意いただいている、秘密保持契約および知的財産保護に関する誓約に基づき、当サービス内で提供している動画・文章・資料・ノウハウ等のコンテンツを、以下の行為は、いかなる理由があっても固く禁止されています。\n\n・無断で転載すること\n・第三者へ共有、公開すること\n・外部へ漏洩すること\n\nこれらに違反した場合は、契約内容に基づき、強制退会や法的措置を含む厳正な対応を検討する場合がありますので、あらかじめご了承ください。また、当サービスや講師、受講生に対して誹謗中傷・虚偽の情報発信・反社会的な行動を外部で行った場合についても、同様の対応を取らせていただくことがあります。",
  },
  {
    title: "コミュニティ利用についてのお願い",
    content:
      "SNS Media Labは、SNSマーケティング・商品設計・セールス・動画制作を学び、成長したい人のための環境です。\n\nSNSや外部コミュニティにおいても、他の受講生や第三者の迷惑になる行為、不必要なトラブルや対立を生む発言はお控えください。お互いを尊重し合い、全員でスキルを高め合える環境作りにご協力をお願いいたします。",
  },
  {
    title: "注意喚起",
    content:
      "当サービスは、SNSマーケティング、商品設計、販売導線、セールス、動画編集およびYouTube運営に関する教材・情報コンテンツの提供を目的としたものであり、売上・成約・収益化・案件獲得・金銭的利益を保証するものではありません。\n\n当サービス内で提供される内容は、講師の経験や検証に基づいた情報ではありますが、正確性・完全性・最新性を保証するものではありません。当サービス内の情報をどのように活用するか、その結果として生じる成果・損失・トラブル等については、すべてご自身の判断と責任において行ってください。\n\n万が一、コンテンツ内に誤りや表現の違いがあった場合であっても、それによって生じた損害や不利益について、当サービスおよび運営者は一切の責任を負いかねます。",
  },
  {
    title: "コンテンツの取り扱いについて",
    content:
      "当サービスに含まれるすべてのコンテンツは、著作物として法的に保護されています。非常に秘匿性の高い内容を含むため、事前の許可なく第三者に開示・共有・公開することは禁止されています。",
  },
  {
    title: "最後に",
    content:
      "これらの注意事項は、受講生の皆さまが安心して学び、集中できる環境を守るためのものです。内容をご理解いただいたうえで、スキルアップにつなげてください。",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
            <span>›</span>
            <span className="text-gray-700">利用規約</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          利用規約
        </h1>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-5 bg-primary rounded-full flex-shrink-0" />
                {section.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
