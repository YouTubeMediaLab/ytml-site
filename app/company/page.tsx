import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要 | SNS Media Lab",
  description: "SNS Media Labの会社概要ページです。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社ult Adam" },
  { label: "代表者名", value: "吉柳 雄飛" },
  { label: "所在地", value: "東京都中央区銀座7-13-6 サガミビル2階" },
  {
    label: "電話番号",
    value: "080-6880-9400\n※営業・勧誘のお電話はご遠慮ください。",
  },
  { label: "メールアドレス", value: "ytb.media.lab@gmail.com" },
  { label: "事業内容", value: "オンラインスクール運営、動画制作スキル教育事業" },
  { label: "サービス名", value: "SNS Media Lab（SNSメディアラボ）" },
  { label: "対象エリア", value: "全国（オンライン対応）" },
];

export default function CompanyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              ホーム
            </Link>
            <span>›</span>
            <span className="text-gray-700">会社概要</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          会社概要
        </h1>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <tbody>
              {companyInfo.map((item, idx) => (
                <tr
                  key={item.label}
                  className={`border-b border-gray-100 last:border-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <th className="text-left py-5 px-6 text-sm font-semibold text-gray-700 w-36 md:w-48 align-top">
                    {item.label}
                  </th>
                  <td className="py-5 px-6 text-sm text-gray-800 leading-relaxed">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Link href="/tokushoho" className="btn-outline text-sm py-2.5 px-5">
            特定商取引法に基づく表記
          </Link>
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
