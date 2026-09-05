import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { COURSES, OFFER, withTax, yen } from "@/config/offer";

const { videoEditing, youtubeHalf, youtubeYear } = COURSES;

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | SNS Media Lab",
  description: "SNS Media Labの特定商取引法に基づく表記ページです。",
};

const tokushohoItems = [
  { label: "販売業者", value: "株式会社ult Adam" },
  { label: "代表者名", value: "吉柳 雄飛" },
  { label: "所在地", value: "東京都中央区銀座7-13-6 サガミビル2階" },
  {
    label: "電話番号",
    value: "080-6880-9400",
  },
  { label: "メールアドレス", value: BRAND.email },
  {
    label: "サービス名",
    value:
      "SNS Media Lab（SNSメディアラボ）\nSNS売上導線・30日初期構築（事業者向けSNS集客・販売導線構築支援）",
  },
  {
    label: "販売価格",
    value: [
      `${videoEditing.name}：${yen(withTax(videoEditing.currentPriceExTax))}（税込）`,
      `${youtubeHalf.name}：${yen(withTax(youtubeHalf.currentPriceExTax))}（税込）`,
      `${youtubeYear.name}：${yen(withTax(youtubeYear.currentPriceExTax))}（税込）`,
      "SNS売上導線・30日初期構築：330,000円（税込）",
      "",
      `※ 非属人YouTubeコースの上記価格は、${OFFER.startLabel}から先着${OFFER.capacity}名限定の価格です。${OFFER.capacity}名の受付終了後は、半年コース${yen(withTax(youtubeHalf.futurePriceExTax))}（税込）、1年コース${yen(withTax(youtubeYear.futurePriceExTax))}（税込）へ改定します。動画編集コースの価格は据え置きです。`,
      "※ 現在の受付状況は、お申し込み前の個別相談にてお伝えします。",
    ].join("\n"),
  },
  {
    label: "販売価格以外の必要料金",
    value:
      "Adobe Premiere Proの利用にはAdobe Creative Cloudのサブスクリプション費用が別途必要です。\nまた、制作で使用するAIツール（ChatGPT、Claude、Vrew、ElevenLabs など。いずれも無料版から利用可能）の利用料はお客様のご負担となります。\nSNS売上導線・30日初期構築では、公式LINE、UTAGE、予約システム、独自ドメインその他の外部サービスを利用する場合、その利用料はお客様のご負担となります。利用するサービスと費用は契約前にご案内します。",
  },
  {
    label: "お支払い方法",
    value:
      "銀行振込・クレジットカード\n※ スクール商品は分割払いにも対応しています。詳細はお申し込み時にご案内します。",
  },
  {
    label: "支払い時期",
    value:
      "お申し込み確認後、契約書または請求書に記載する期日までにお支払いください。",
  },
  {
    label: "サービス提供時期",
    value:
      "SNS Media Lab：お支払い確認後、24時間以内に受講方法をご案内します。\nSNS売上導線・30日初期構築：お支払い確認後に初回ヒアリング日を調整し、必要な情報・素材の受領後から原則30日以内を目安に初期構築を行います。お客様による確認・素材提出の状況、外部サービスの審査・仕様等により前後する場合があります。具体的な日程は契約前にご案内します。",
  },
  {
    label: "サービスの提供方法",
    value:
      "SNS Media Lab：オンライン（動画教材・LINEサポート・ZOOMによる個別MT）\nSNS売上導線・30日初期構築：オンラインでのヒアリング、戦略設計、SNS入口設計、LP・公式LINE・UTAGE・フォーム・予約導線等の初期構築、動作確認、操作方法の引き継ぎおよび納品後30日間の質問・軽微修正対応",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "契約書面を受領した日から8日以内であれば、書面または電磁的記録の送信により契約を解除でき、受領済みの金銭は全額返金します（クーリング・オフ）。\nただし、法人または事業のために締結する契約など、法令上クーリング・オフが適用されない場合があります。\nクーリング・オフ期間の経過後、または適用対象外となる契約については、当社の責めに帰すべき事由がある場合を除き、サービスの性質上、返金・中途解約には応じていません。個別契約に別段の定めがある場合は、その内容を優先します。",
  },
  {
    label: "サポート期間の延長について",
    value:
      "SNS Media Labの対象コースでは、サポート期間内に受講料相当額を回収できなかった場合、追加費用なしでサポートを継続します。\n適用条件の詳細は、お申し込み前の個別相談および契約書面にてご確認ください。\n本制度は、SNS売上導線・30日初期構築には適用されません。",
  },
  {
    label: "特記事項",
    value:
      "SNS Media Labは、SNSマーケティング、商品設計、販売導線、セールス、動画編集およびYouTubeチャンネル運営スキルの習得を目的とした教育サービスです。\nSNS売上導線・30日初期構築は、事業者の商品・顧客・既存導線を確認し、SNSから個別相談までの初期導線を設計・構築する支援サービスです。日々の投稿代行、広告運用代行および営業代行は、個別契約に明記しない限り含まれません。\nいずれのサービスも、売上・利益・成約件数・収益化・副業収入・案件獲得・就職等の成果を保証するものではありません。成果には、商品、市場環境、発信内容、実践量その他の事情による差があります。",
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
          <table className="w-full block md:table">
            <tbody className="block md:table-row-group">
              {tokushohoItems.map((item, idx) => (
                <tr
                  key={item.label}
                  className={`block md:table-row border-b border-gray-100 last:border-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <th className="block md:table-cell text-left pt-5 pb-1 md:py-5 px-5 md:px-6 text-sm font-semibold text-gray-700 w-full md:w-48 align-top">
                    {item.label}
                  </th>
                  <td className="block md:table-cell pt-1 pb-5 md:py-5 px-5 md:px-6 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
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
