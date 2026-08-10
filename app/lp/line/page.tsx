import type { Metadata } from "next";
import Image from "next/image";
import { EvidenceCarousel } from "@/components/EvidenceCarousel";
import { OPERATOR_EVIDENCE, STUDENT_EVIDENCE } from "@/config/evidence";

const SCREENING_FORM_URL = "https://forms.gle/cQmoVCfWMhEhbYDC7";

export const metadata: Metadata = {
  title: "SNS集客から商品設計・セールスまで | YouTube Media Lab",
  description:
      "Instagram・Threads・YouTubeなどのSNSを活用し、集客から商品設計、販売導線、セールスまでを一貫して学べるオンラインスクールです。商品がない方も未経験から相談できます。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "SNSを、売上を生む仕組みへ。 | YouTube Media Lab",
    description:
      "集客だけで終わらせない。商品設計・SNS運用・マーケティング・セールスまでを一つの流れで学べます。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.youtubemedialab.com/lp/line",
    images: [
      {
        url: "https://www.youtubemedialab.com/images/line-lp-og.png",
        width: 1200,
        height: 630,
        alt: "YouTube Media Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNSを、売上を生む仕組みへ。 | YouTube Media Lab",
    description:
      "Instagram・Threads・YouTubeから、商品設計・集客・販売までを一貫して学べます。",
    images: ["https://www.youtubemedialab.com/images/line-lp-og.png"],
  },
};

const concerns = [
  "SNSを始めたいけれど、どの媒体から手をつければよいかわからない",
  "投稿を続けても、フォロワーや売上につながるイメージが持てない",
  "集客の方法は見かけるけれど、その先の売り方まで教わる場所がない",
  "自分なら作れる商品やサービスを考えたい",
  "自分の商品はあるものの、魅力や違いをうまく言葉にできない",
  "顔出しや実名公開をせず、完全在宅で収入の柱をつくりたい",
];

const salesFlow = [
  {
    number: "01",
    label: "OFFER",
    title: "商品設計",
    text: "経験・得意・市場の悩みを整理し、誰に何を届けるのかを言葉にします。商品がない方もここから始められます。",
  },
  {
    number: "02",
    label: "CONTENT",
    title: "SNS運用",
    text: "Instagram・Threads・YouTubeなど、目的に合ったSNSを使い分け、見込み客に届く企画と発信の型を身につけます。",
  },
  {
    number: "03",
    label: "MARKETING",
    title: "集客・教育・導線",
    text: "投稿からLINEなどへ自然につなぎ、商品の必要性を理解してもらうまでの流れを設計します。",
  },
  {
    number: "04",
    label: "SALES",
    title: "提案・セールス",
    text: "相手の状況を聞き、必要な情報を順番に伝え、納得して判断してもらう販売力を学びます。",
  },
];

const audiences = [
  {
    label: "商品がない方",
    title: "売るものを決めるところから",
    text: "これまでの経験や、これから取り組みたい分野をヒアリングし、需要のある商品へ整理します。希望や適性によっては、YMLの正規代理店として活動することも可能です。",
    points: ["経験・強みの棚卸し", "商品内容と価格の設計", "YML正規代理店制度（審査あり）"],
  },
  {
    label: "すでに商品がある方",
    title: "売れるまでの流れを見直す",
    text: "商品の魅力、発信内容、見込み客との接点、提案方法を一つの導線として整理し、売上につながらない原因を見つけます。",
    points: ["商品・訴求の見直し", "SNSからの販売導線", "面談・提案・成約率の改善"],
  },
];

const records = [
  {
    value: "約17億円",
    label: "SNSから生まれた累計売上",
    detail: "営業代行事業・YouTube関連事業などの累計。",
  },
  {
    value: "16.3億円",
    label: "営業代行事業の売上",
    detail: "SNSで集客し、提案から成約まで担当。",
  },
  {
    value: "1,200万円",
    label: "YouTube関連事業の売上",
    detail: "3か月間の売上。",
  },
  {
    value: "月120万円",
    label: "運営chの最高月収",
    detail: "初挑戦の非属人YouTubeを1か月半で収益化。",
  },
  {
    value: "100名以上",
    label: "これまでの指導実績",
    detail: "YouTube Media Labでの指導人数。",
  },
];

const courseCards = [
  {
    number: "01",
    badge: "BASIC",
    title: "動画編集コース",
    period: "1年間",
    text: "Premiere Proの基本操作から、仕事やSNS発信に活かせる実践的な動画編集まで、自分のペースで学びます。",
    outcome:
      "動画編集案件を受けて、在宅で自分の時間に合わせて働く選択肢を持てます。また、日常やSNSで発信する動画の品質を高め、より伝わりやすく拡散されやすい表現を目指せます。",
    items: ["カット・テロップ・画像挿入", "BGM・効果音・書き出し", "LINE質問・Zoom個別MT"],
  },
  {
    number: "02",
    badge: "STANDARD",
    title: "非属人YouTubeコース",
    period: "半年",
    text: "顔・声・名前を出さずに、YouTubeチャンネルを設計・運営する方法を学びます。",
    outcome:
      "自分自身を前面に出さず、動画の再生収益を目指せます。個性や知名度に頼る必要がなく、複数テーマのチャンネルブランドを運営できることも非属人YouTubeの強みです。",
    items: ["チャンネル・コンセプト設計", "AIを使った企画・台本", "投稿・分析・収益化の仕組み"],
  },
  {
    number: "03",
    badge: "PREMIUM",
    title: "非属人YouTubeコース",
    period: "1年間・完全伴走型",
    text: "動画制作・YouTube運営に加え、各種SNS、マーケティング、商品設計、セールスまで一貫して学びます。",
    outcome:
      "すべてのコース内容に加え、講師が実践に直接伴走します。疑問をすぐに確認しながら、講師が現場で使っている判断基準やスキルを近い距離で吸収できます。",
    items: [
      "Instagram・Threads・YouTubeなどの運用",
      "商品設計・集客・販売導線",
      "セールス・外注化・チーム構築",
    ],
    recommended: true,
  },
];

const supports = [
  {
    mark: "LINE",
    title: "LINEで無制限に質問",
    text: "サポート期間中は、学習や実践で出てきた疑問を回数を気にせず送れます。",
  },
  {
    mark: "1:1",
    title: "Zoom個別ミーティング",
    text: "画面共有をしながら、現在地と次にやることを一緒に整理します。",
  },
  {
    mark: "PLAY",
    title: "繰り返し見られる動画教材",
    text: "仕事や家事の合間にも、必要な内容を自分のペースで確認できます。",
  },
  {
    mark: "CHECK",
    title: "実践内容へのフィードバック",
    text: "投稿・動画・商品・導線を確認し、良い点と改善点を具体的にお伝えします。",
  },
];

const faqs = [
  {
    q: "SNSもセールスも未経験ですが大丈夫ですか？",
    a: "はい。ほとんどの方が未経験からのスタートです。パソコンの基本操作を含め、必要なことを順番に学べるようにしています。",
  },
  {
    q: "まだ売る商品がありません。",
    a: "問題ありません。経験や興味、取り組める時間などを伺い、商品設計から一緒に整理します。希望や適性によっては、審査のうえでYMLの正規代理店として活動することも可能です。",
  },
  {
    q: "すべてのSNSを使う必要がありますか？",
    a: "いいえ。Instagram・Threads・YouTube・X・TikTok・Facebookなどから、商品・目的・得意な発信方法に合う媒体を選び、優先順位を決めます。すべてを同時に始める必要はありません。",
  },
  {
    q: "顔出しや実名公開は必要ですか？",
    a: "必須ではありません。非属人YouTubeをはじめ、顔や名前を出さずに進める方法も学べます。商品や発信内容に合わせて、無理のない方法を一緒に選びます。",
  },
  {
    q: "回答すれば必ず個別相談を受けられますか？",
    a: "個別相談は事前審査制です。アンケート内容を確認し、現在のサービスでお力になれると判断した方にのみ、個別相談のご案内をお送りします。",
  },
  {
    q: "受講すれば収益を得られますか？",
    a: "収益や成約を保証するものではありません。成果は商品、市場、実践量、発信内容などによって異なります。本スクールは必要なスキルと考え方を身につけるための教育サービスです。",
  },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="YouTube Media Lab">
      <Image
        src="/images/yml-icon.jpg"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 rounded-xl shadow-sm"
        priority
      />
      <span className="text-left text-sm font-black leading-tight tracking-tight text-gray-900">
        YouTube
        <br />
        <span className="text-primary">Media Lab</span>
      </span>
    </div>
  );
}

function ScreeningLink({ label = "無料で個別相談に申し込む" }: { label?: string }) {
  return (
    <a
      href={SCREENING_FORM_URL}
      className="consultation-cta inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-base font-black leading-6 text-white ring-4 ring-[#ffd84d]/75 transition hover:-translate-y-0.5 hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-[#ffd84d] sm:w-auto sm:min-w-[24rem] sm:px-8 sm:text-lg"
    >
      {label}
      <span className="ml-2" aria-hidden="true">→</span>
    </a>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-bold tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-black leading-snug tracking-tight text-gray-900 [text-wrap:balance] md:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}

export default function LineLandingPage() {
  return (
    <div className="line-lp overflow-hidden bg-white pb-20 text-gray-900 md:pb-0">
      <div className="absolute left-0 right-0 top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 md:h-20">
          <BrandMark />
        </div>
      </div>

      <section className="relative flex min-h-[760px] items-center overflow-hidden pb-10 pt-24 md:min-h-[820px] md:pb-16 md:pt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="自宅でSNS運用を学ぶ女性"
            fill
            sizes="100vw"
            className="object-cover object-[34%_18%] md:object-[20%_center]"
            priority
          />
          <div className="absolute inset-0 hidden bg-gradient-to-l from-white via-white/90 to-white/10 md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.84] via-white/[0.92] to-white/[0.86] md:hidden" />
        </div>
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-6xl px-5 md:px-10">
          <div className="w-full md:ml-auto md:max-w-[570px]">
            <p className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-[11px] font-black tracking-[0.04em] text-primary shadow-sm md:text-xs">
              SNS集客から商品設計・セールスまで
            </p>
            <h1 className="font-black leading-[1.14] tracking-tight [text-wrap:balance]">
              <span className="block text-[2.1rem] text-gray-900 sm:text-5xl md:text-[3.35rem]">人を集めるだけでは、</span>
              <span className="block text-[2.1rem] text-gray-900 sm:text-5xl md:text-[3.35rem]">売上にならない。</span>
              <span className="relative mt-3 inline-block text-[2.1rem] text-primary sm:text-5xl md:text-[3.35rem]">
                <span className="block sm:inline">SNSを、</span>
                <span className="block sm:inline">売上を生む仕組みへ。</span>
                <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-[0.6deg] rounded-full bg-[#ffd84d]/80" aria-hidden="true" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-gray-700 md:text-base md:leading-8">
              <span className="block">Instagram・Threads・YouTubeなどのSNSを活用し、</span>
              <span className="block">発信、集客、教育、販売まで。</span>
              <strong className="mt-1 block whitespace-nowrap font-black text-gray-900">「最後に利益を生み出す」ために、</strong>
              <span className="block">商品設計から販売までを一つの流れで学べます。</span>
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {["商品がなくてもOK", "未経験歓迎", "完全在宅", "顔出しなしも可能"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-xl border border-red-100 bg-white/95 px-2 py-2.5 text-center text-[10px] font-black text-gray-800 shadow-sm sm:px-3 sm:text-xs"
                >
                  <span className="mr-1 text-primary">✓</span>{item}
                </span>
              ))}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-3xl border-2 border-[#ffd84d] bg-gradient-to-br from-primary via-[#a90d29] to-[#700718] p-5 text-white shadow-[0_18px_38px_-16px_rgba(122,7,26,0.75)] sm:max-w-[33rem] md:p-6">
              <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-[#ffd84d]/25 blur-2xl" aria-hidden="true" />
              <p className="relative text-[10px] font-black tracking-[0.2em] text-[#ffd84d]">TRACK RECORD</p>
              <p className="relative mt-2 font-black leading-tight">
                <span className="block text-sm text-white/90 md:text-base">代表がSNSから生み出した</span>
                <span className="mt-1 block text-lg md:text-xl">
                  累計売り上げ
                  <strong className="ml-2 text-[2.25rem] font-black leading-none text-[#ffd84d] md:text-[2.8rem]">約17億円</strong>
                </span>
              </p>
              <p className="relative mt-3 text-[10px] leading-4 text-white/65">※ 運営者本人の実績であり、受講後の成果を保証するものではありません。</p>
            </div>

            <div className="mt-8">
              <ScreeningLink />
              <p className="mt-4 text-xs font-medium leading-5 text-gray-600">
                回答後、公式LINEへ戻り「回答完了」と送信してください
              </p>
              <p className="mt-1 text-[11px] leading-5 text-gray-500">審査通過者にのみ、個別相談のご案内をお送りします</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-red-100 bg-red-50">
        <p className="mx-auto max-w-4xl px-4 py-4 text-center text-xs font-medium leading-6 text-red-900 md:text-sm">
          YouTube Media Labは有料のオンラインスクールです。申し込みフォーム回答後に審査を行い、通過された方へ個別相談をご案内します。
        </p>
      </div>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="FOR YOU">こんなお悩みはありませんか？</SectionHeading>
          <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 md:gap-4">
            {concerns.map((concern) => (
              <div key={concern} className="flex items-start gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50/80 to-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">✓</span>
                <p className="text-sm font-medium leading-6 text-gray-700 md:text-base">{concern}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-primary/15 bg-white p-6 text-center shadow-xl shadow-red-900/5 md:p-10">
            <p className="mb-3 text-xs font-black tracking-[0.18em] text-primary">THE REAL ISSUE</p>
            <h3 className="text-xl font-black leading-8 text-gray-900 md:text-3xl md:leading-tight">
              フォロワーを集めることが、
              <br className="hidden md:block" />
              <span className="relative inline-block text-primary">
                SNSのゴールではありません。
                <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full bg-[#ffd84d]" aria-hidden="true" />
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 [text-wrap:pretty] md:text-base">
              どれだけ人を集めても、商品が決まっていない、必要性が伝わらない、最後の提案ができない状態では売上にはつながりません。だからYMLでは、集客だけでなく商品設計とセールスまでを一貫して学びます。
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="ONE FLOW">売れるまでに必要な4つの力</SectionHeading>
          <div className="grid gap-4 md:grid-cols-4">
            {salesFlow.map((item) => (
              <article key={item.number} className="relative rounded-2xl border border-red-100 bg-white p-6 shadow-lg shadow-red-900/5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffd84d] text-xl font-black text-gray-900 shadow-sm">{item.number}</span>
                  <span className="text-[9px] font-black tracking-[0.16em] text-primary/70">{item.label}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ScreeningLink />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="STARTING POINT">商品がある人も、ない人も始められます</SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {audiences.map((audience, index) => (
              <article
                key={audience.label}
                className={`rounded-3xl p-7 shadow-lg md:p-10 ${index === 0 ? "border border-gray-200 bg-white" : "bg-primary text-white shadow-primary/15"}`}
              >
                <p className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${index === 0 ? "bg-red-50 text-primary" : "bg-white/15 text-white"}`}>{audience.label}</p>
                <h3 className="mb-4 text-2xl font-black">{audience.title}</h3>
                <p className={`mb-6 text-sm leading-7 md:text-base ${index === 0 ? "text-gray-600" : "text-red-50"}`}>{audience.text}</p>
                <ul className="space-y-3 text-sm font-bold">
                  {audience.points.map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className={index === 0 ? "text-primary" : "text-[#ffd84d]"}>●</span>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-4xl rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-xs leading-6 text-amber-900 md:text-sm">
            ※ YML正規代理店としての活動には審査があります。活動機会や収益を保証する制度ではありません。
          </p>
        </div>
      </section>

      <section id="profile" className="scroll-mt-5 bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-red-900/10 ring-1 ring-red-100">
          <div className="grid md:grid-cols-[340px_1fr]">
            <div className="relative min-h-[370px] overflow-hidden bg-primary md:min-h-[470px]">
              <Image src="/images/yuuhi-profile.jpg" alt="YouTube Media Lab運営者 ゆうひ" fill sizes="(max-width: 768px) 100vw, 340px" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="text-xl font-black">ゆうひ</p>
                <p className="mt-1 text-xs font-bold tracking-wider text-white/80">株式会社ult Adam 代表取締役</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary">OPERATOR</p>
              <h2 className="mb-5 text-2xl font-black md:text-3xl">集客だけでなく、モノが売れる仕組みを構築。</h2>
              <p className="text-sm leading-8 text-gray-600 md:text-base">
                営業代行からYouTube関連事業まで、集客はすべてSNSで行ってきました。現在は動画編集・非属人YouTube運営に加え、Instagram・Threads・YouTubeの運用、商品設計、マーケティング、セールスを一つの流れとして指導しています。
              </p>
              <div className="mt-6 rounded-2xl border-l-4 border-primary bg-red-50 p-5">
                <p className="text-sm font-bold leading-7 text-gray-800">
                  <span className="block">物が最後に売れなければ、集客だけ学んでも売上にはならない。</span>
                  <span className="mt-1 block">だから、販売まで自分で組み立てられる力を大切にしています。</span>
                </p>
              </div>
            </div>
          </div>

          <div className="results-gold-panel border-t border-[#e2b84d] p-6 md:p-9">
            <div className="mb-6 text-center">
              <p className="text-xs font-black tracking-[0.2em] text-[#a97809]">TRACK RECORD</p>
              <h3 className="mt-2 text-xl font-black text-gray-900 md:text-2xl">数字で見る、運営者の実績</h3>
            </div>
            <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
              {records.map((record) => (
                <div key={record.value} className="result-gold-card flex min-h-40 w-[76vw] max-w-[270px] flex-none snap-center flex-col items-center justify-center rounded-2xl border px-4 py-5 text-center md:w-auto md:max-w-none">
                  <p className="result-gold-value whitespace-nowrap text-2xl font-black tracking-tight md:text-[1.65rem]">{record.value}</p>
                  <p className="mt-2 text-[11px] font-bold leading-5 text-gray-800">{record.label}</p>
                  <p className="mt-1 text-[10px] leading-4 text-gray-500">{record.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] font-bold tracking-[0.08em] text-[#8a5900] md:hidden">
              ← 横にスワイプして実績を見る →
            </p>
            <p className="mt-5 text-center text-[11px] leading-5 text-gray-500">※ 上記はいずれも運営者本人の実績です。受講したすべての方に同様の成果を保証するものではありません。</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="EVIDENCE">YouTube運営・受講生の実績</SectionHeading>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5 md:p-7">
              <h3 className="mb-2 text-lg font-black text-gray-900">運営チャンネルの一部</h3>
              <p className="mb-5 text-xs leading-6 text-gray-500">現在運営している20チャンネルのうち、一部の管理画面です。チャンネル名は伏せています。</p>
              <EvidenceCarousel items={OPERATOR_EVIDENCE} heightClass="h-[185px] md:h-[225px]" tone="gold" />
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5 md:p-7">
              <h3 className="mb-2 text-lg font-black text-gray-900">受講された方からの報告</h3>
              <p className="mb-5 text-xs leading-6 text-gray-500">掲載許可をいただいた受講生からの実際のご連絡です。個人が特定される情報は伏せています。</p>
              <EvidenceCarousel items={STUDENT_EVIDENCE} heightClass="h-[185px] md:h-[225px]" />
            </div>
          </div>
          <p className="mt-5 text-center text-[11px] leading-5 text-gray-500">※ 掲載しているのは個人の結果であり、すべての方に同様の成果を保証するものではありません。</p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="COURSE">目的に合わせた4つのプラン</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {courseCards.map((course) => (
              <article key={course.number} className={`relative flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-sm ${course.recommended ? "border-primary shadow-xl shadow-primary/10" : "border-gray-200"}`}>
                {course.recommended && <div className="bg-primary py-2 text-center text-xs font-black text-white">★ SNSマーケティング・セールスまで対応</div>}
                <div className="flex h-full flex-col p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl font-black text-gray-200">{course.number}</span>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black ${course.recommended ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}>{course.badge}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900">{course.title}</h3>
                  <p className="mt-1 text-xs font-bold text-primary">サポート期間：{course.period}</p>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{course.text}</p>
                  <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/70 p-4">
                    <p className="text-[10px] font-black tracking-[0.12em] text-primary">このコースの活かし方</p>
                    <p className="mt-2 text-xs font-medium leading-6 text-gray-700">{course.outcome}</p>
                  </div>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-gray-100 pt-5">
                    {course.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-medium leading-6 text-gray-700"><span className="mt-0.5 text-primary">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 text-white shadow-2xl">
            <div className="p-7 md:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-white/20">04</span>
                  <span className="inline-flex rounded-full bg-[#ffd84d] px-3 py-1 text-[11px] font-black text-gray-900">月3名限定</span>
                </div>
                <p className="mt-4 text-xs font-black tracking-[0.18em] text-[#ffd84d]">PRIVATE CONSULTING</p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">完全特別コンサル</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">事業として大きく伸ばしたい方へ。講師が商品・SNS・販売導線をまとめて設計し、実行まで直接並走します。</p>
                <div className="mt-5 max-w-3xl rounded-2xl border border-[#ffd84d]/30 bg-[#ffd84d]/10 p-4">
                  <p className="text-[10px] font-black tracking-[0.12em] text-[#ffd84d]">このコンサルの活かし方</p>
                  <p className="mt-2 text-sm font-medium leading-7 text-white/90">講師が培ってきたSNSマーケティングとセールスの考え方を、ご自身の事業に合わせて実践します。商品設計から集客・提案・販売まで、ひとりでも一連の流れを組み立てられる力を身につけます。</p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-gray-200 md:grid-cols-3">
                  {["商品・訴求の設計", "SNSと販売導線の構築", "運営者が直接並走"].map((item) => <li key={item} className="flex items-center gap-2"><span className="text-[#ffd84d]">●</span>{item}</li>)}
                </ul>
              </div>
            </div>
            <p className="border-t border-gray-800 px-6 py-4 text-center text-[11px] leading-5 text-gray-500">※ 受け入れは月3名までです。審査結果によってはご希望に添えない場合があります。</p>
          </div>

          <div className="mt-10 text-center"><ScreeningLink /></div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="SUPPORT">ひとりで止まらないためのサポート</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {supports.map((support) => (
              <article key={support.title} className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-[10px] font-black tracking-tight text-primary">{support.mark}</span>
                <div><h3 className="mb-2 text-base font-bold text-gray-900 md:text-lg">{support.title}</h3><p className="text-sm leading-7 text-gray-600">{support.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ">よくある質問</SectionHeading>
          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white px-5 shadow-sm md:px-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-gray-900 marker:content-none">
                  <span className="flex gap-3 text-sm leading-6 md:text-base"><span className="text-primary">Q.</span>{faq.q}</span>
                  <span className="text-xl font-normal text-primary transition group-open:rotate-45" aria-hidden="true">＋</span>
                </summary>
                <p className="ml-8 mt-3 text-sm leading-7 text-gray-600 md:text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="screening" className="relative scroll-mt-5 overflow-hidden bg-gradient-to-br from-primary via-[#a90d29] to-[#700718] px-4 py-16 md:py-24">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ffd84d]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="relative text-white md:sticky md:top-8">
            <p className="mb-3 inline-block rounded-full bg-[#ffd84d] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-gray-900">SCREENING</p>
            <h2 className="whitespace-nowrap text-[1.65rem] font-black leading-tight md:text-[2rem]">最初は、皆さん同じです。</h2>
            <p className="mt-5 text-sm leading-7 text-white/85 md:text-base">商品が決まっていなくても、稼げる自信がなくても、まったく問題ありません。今の状況や目標を伺い、現在のサービスでお力になれる方へ個別相談をご案内します。</p>
            <div className="mt-7 space-y-3 text-sm font-bold text-white">
              <p><span className="mr-2 text-[#ffd84d]">✓</span>申し込みフォームは約3〜5分</p>
              <p><span className="mr-2 text-[#ffd84d]">✓</span>商品がない方も回答可能</p>
              <p><span className="mr-2 text-[#ffd84d]">✓</span>個別相談は審査通過者のみ</p>
            </div>
          </div>

          <div className="relative rounded-3xl bg-white p-6 shadow-2xl md:p-9">
            <p className="mb-2 text-xs font-black tracking-[0.18em] text-primary">HOW TO APPLY</p>
            <h3 className="text-2xl font-black leading-snug text-gray-900 md:text-3xl">回答後、LINEで<br />「回答完了」と送信してください。</h3>
            <ol className="my-7 space-y-4">
              {[
                "申し込みフォームに回答",
                "公式LINEへ戻り「回答完了」と送信",
                "内容を確認後、審査通過者に個別相談をご案内",
              ].map((step, index) => (
                <li key={step} className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ffd84d] text-sm font-black text-gray-900">{index + 1}</span>
                  <span className="text-sm font-bold leading-6 text-gray-800">{step}</span>
                </li>
              ))}
            </ol>
            <a href={SCREENING_FORM_URL} className="consultation-cta flex min-h-20 w-full items-center justify-center rounded-2xl bg-primary px-5 py-5 text-center text-lg font-black leading-6 text-white ring-4 ring-[#ffd84d]/75 transition hover:-translate-y-0.5 hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-[#ffd84d] sm:text-xl">
              無料で個別相談に申し込む<span className="ml-2" aria-hidden="true">→</span>
            </a>
            <p className="mt-5 text-center text-xs leading-5 text-gray-500">ボタンを押すとGoogleフォームへ移動します。回答のみで契約や料金は発生しません。</p>
          </div>
        </div>
      </section>

      <div className="bg-[#540511] px-4 py-8 text-center">
        <p className="mb-3 text-xs text-white/50">© {new Date().getFullYear()} YouTube Media Lab / 株式会社ult Adam</p>
        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 underline underline-offset-4 transition hover:text-white">プライバシーポリシー</a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <a href={SCREENING_FORM_URL} className="consultation-cta flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-4 text-center text-sm font-black leading-5 text-white ring-2 ring-[#ffd84d]">
          無料で個別相談に申し込む<span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
