import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | YouTube Media Lab",
  description: "YouTube Media Labの特定商取引法に基づく表記ページです。",
};

const tokushohoItems = [
  { label: "販売業者", value: "株式会社ult Adam" },
  { label: "代表者名", value: "吉柳 雄飛" },
  { label: "所在地", value: "東京都中央区銀座7-13-6 サガミビル2階" },
  {
    label: "電話番号",
    value: "080-6880-9400",
  },
  { label: "メールアドレス", value: "ytb.media.lab@gmail.com" },
  { label: "サービス名", value: "YouTube Media Lab（YouTubeメディアラボ）" },
  {
    label: "販売価格",
    value:
      "動画編集コース：99,000円（税込）\n非属人YouTubeコース（半年）：297,000円（税込）\n非属人YouTubeコース（1年）：495,000円（税込）",
  },
  {
    label: "販売価格以外の必要料金",
    value:
      "Adobe Premiere Proの利用にはAdobe Creative Cloudのサブスクリプション費用が別途必要です。詳細はご入会前の個別説明にてご案内します。",
  },
  {
    label: "お支払い方法",
    value: "銀行振込・クレジットカード・分割払い（詳細はお申し込み時にご案内します）",
  },
  { label: "支払い時期", value: "お申し込み確認後、指定の期日までにお支払いください。" },
  { label: "サービス提供時期", value: "お支払い確認後、24時間以内にご案内します。" },
  { label: "サービスの提供方法", value: "オンライン（動画教材・LINEサポート・ZOOMによる個別MT）" },
  {
    label: "返品・キャンセルについて",
    value:
      "お申し込み後7日以内かつ教材視聴前のキャンセルに限り、全額返金いたします。\nそれ以降のキャンセル・返金は原則として受け付けておりません。\n詳細はお問い合わせください。",
  },
  {
    label: "特記事項",
    value:
      "本サービスは、動画編集スキルおよびYouTubeチャンネル運営スキルの習得を目的とした教育サービスです。\n受講後の収益化・副業収入・案件獲得・就職等の成果を保証するものではありません。\n学習成果には個人差があります。",
  },
];

export default function TokushohoPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
            <span>›</span>
            <span className="text-gray-700">特定商取引法に基づく表記</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          特定商取引法に基づく表記
        </h1>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <tbody>
              {tokushohoItems.map((item, idx) => (
                <tr
                  key={item.label}
                  className={`border-b border-gray-100 last:border-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <th className="text-left py-5 px-6 text-sm font-semibold text-gray-700 w-36 md:w-48 align-top">
                    {item.label}
                  </th>
                  <td className="py-5 px-6 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
