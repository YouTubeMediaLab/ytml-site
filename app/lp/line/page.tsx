import type { Metadata } from "next";
import Image from "next/image";

const CONSULTATION_URL =
  "https://online.youtubemedialab.com/event/8Ozul6uNejuu/register";

export const metadata: Metadata = {
  title: "完全在宅で学ぶAI×非属人YouTube運営 | YouTube Media Lab",
  description:
    "顔出し・本名公開・撮影不要。動画編集とAIを活用した非属人YouTube運営を、未経験から完全在宅で体系的に学べるオンラインスクールです。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "完全在宅で学ぶAI×非属人YouTube運営 | YouTube Media Lab",
    description:
      "顔出し・撮影不要。動画編集とAIを活用した非属人YouTube運営を未経験から体系的に学べます。",
    type: "website",
    locale: "ja_JP",
    url: "https://www.youtubemedialab.com/lp/line",
    images: [
      {
        url: "https://www.youtubemedialab.com/images/line-lp-og.png",
        width: 1200,
        height: 630,
        alt: "顔出し不要のYouTube運営を基礎から - YouTube Media Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "完全在宅で学ぶAI×非属人YouTube運営 | YouTube Media Lab",
    description:
      "顔出し・撮影不要。動画編集とAIを活用した非属人YouTube運営を未経験から体系的に学べます。",
    images: ["https://www.youtubemedialab.com/images/line-lp-og.png"],
  },
};

const concerns = [
  "副業に興味はあるけれど、顔出しや身バレに抵抗がある",
  "仕事や家事があり、対面ではなく完全在宅で学びたい",
  "副業を始めたいのに、情報が多すぎて最初の一歩が決まらない",
  "AIや動画編集を調べても、何をどの順番で使えばよいかわからない",
  "独学でYouTubeを始めたものの、疑問が解消できず途中で止まってしまった",
  "企画・台本・編集・分析まで、最適な方法を身につけたい",
];

const curriculum = [
  {
    number: "01",
    title: "チャンネル設計",
    text: "ジャンル選びや視聴者像を整理し、発信の軸を一緒につくります。",
  },
  {
    number: "02",
    title: "企画・台本制作",
    text: "動画の構成や台本づくりを学び、AIの活用方法も身につけます。",
  },
  {
    number: "03",
    title: "動画編集",
    text: "Premiere ProとVrewを使い、目的に合った編集方法を実践的に学びます。",
  },
  {
    number: "04",
    title: "投稿・運用改善",
    text: "投稿後の数字を確認し、次の企画や改善へつなげる考え方を学びます。",
  },
];

const supports = [
  {
    mark: "LINE",
    title: "LINEで無制限に質問",
    text: "サポート期間中は、学習中に出てきた疑問を回数を気にせず、24時間好きなときに送れます。",
  },
  {
    mark: "1:1",
    title: "個別ミーティング",
    text: "Zoomで画面を共有しながら、進捗やつまずきを一緒に整理します。",
  },
  {
    mark: "PLAY",
    title: "繰り返し見られる動画教材",
    text: "仕事や家事の合間にも、自分のペースで何度でも確認できます。",
  },
  {
    mark: "CHECK",
    title: "制作物へのフィードバック",
    text: "良い点と改善点を具体的に確認し、学んだ内容の定着を支えます。",
  },
];

const voices = [
  {
    label: "30代・会社員",
    tone: "bg-gradient-to-br from-slate-700 to-slate-950",
    text: "何から手をつければよいかわからない状態でしたが、学ぶ順番が整理されていたので、迷わず進められました。",
  },
  {
    label: "20代・主婦",
    tone: "bg-gradient-to-br from-rose-400 to-rose-700",
    text: "動画教材を繰り返し見られるため、育児の合間に自分のペースで学べました。LINEで質問できる点も安心でした。",
  },
  {
    label: "50代・自営業",
    tone: "bg-gradient-to-br from-amber-500 to-red-700",
    text: "新しいことを学ぶ不安がありましたが、基礎から順を追って教えてもらい、無理なく取り組めました。",
  },
];

const results = [
  { value: "1.5ヶ月", label: "初挑戦の非属人YouTubeで収益化" },
  { value: "月120万円", label: "運営チャンネルの最高月収" },
  { value: "550万円", label: "該当チャンネルの売却額" },
  { value: "100名以上", label: "これまでの指導実績" },
  { value: "20ch", label: "現在の運営チャンネル数" },
];

const faqs = [
  {
    q: "未経験でも相談できますか？",
    a: "はい。動画編集やYouTube運営が初めての方でもご相談いただけます。必要に応じて、パソコンの基本操作から丁寧にお伝えします。",
  },
  {
    q: "顔出しや撮影は本当に不要ですか？",
    a: "はい。非属人YouTube運営は顔出しを前提とせず、カメラや照明などの撮影機材も必要ありません。パソコンを使って制作・運営する方法を学ぶため、ご安心ください。",
  },
  {
    q: "個別面談では何を話しますか？",
    a: "現在の状況や目標を伺い、学べる内容やサポート、あなたに合う進め方をご説明します。ZoomまたはLINE通話で約30〜60分です。",
  },
  {
    q: "費用はかかりますか？",
    a: "個別面談は無料です。YouTube Media Labは有料のオンラインスクールで、現在は募集開始から先着100名の方を対象に特別価格をご用意しています。具体的なコース内容・費用・特別価格の適用状況は面談内で丁寧にご案内しますので、説明を聞いたうえでご判断いただけます。",
  },
  {
    q: "強く勧誘されることはありませんか？",
    a: "強引な勧誘は行いません。説明を聞いたうえで、ご自身に合うかどうかをご判断ください。",
  },
  {
    q: "受講すれば収益化できますか？",
    a: "受講生の中には、学習開始後の初月に収益化した事例もあります。ただし、本スクールは収益化を保証するものではなく、学習時間や実践内容によって成果には個人差があります。",
  },
];

function VoiceSilhouette({ tone }: { tone: string }) {
  return (
    <span
      className={`relative flex h-14 w-14 flex-shrink-0 items-end justify-center overflow-hidden rounded-full ${tone} ring-4 ring-white shadow-md`}
      aria-hidden="true"
    >
      <span className="absolute top-2 h-5 w-5 rounded-full bg-white/90" />
      <span className="h-7 w-10 rounded-t-full bg-white/90" />
    </span>
  );
}

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

function ConsultationLink({ label = "無料個別面談を予約する" }: { label?: string }) {
  return (
    <a
      href={CONSULTATION_URL}
      className="consultation-cta inline-flex min-h-16 w-full items-center justify-center whitespace-nowrap rounded-2xl bg-primary px-8 py-5 text-center text-lg font-black text-white ring-4 ring-[#ffd84d]/75 transition hover:-translate-y-0.5 hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-[#ffd84d] sm:w-auto sm:min-w-[23rem]"
    >
      {label}
      <span className="ml-2" aria-hidden="true">
        →
      </span>
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

      <section className="relative overflow-hidden bg-white pb-0 pt-24 md:pt-28 lg:min-h-[760px] lg:pb-20">
        <div className="absolute inset-y-0 right-0 hidden w-[72%] lg:block" aria-hidden="true">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            sizes="72vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_18%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.42)_52%,rgba(255,255,255,0.04)_72%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-[#ffd84d]/30 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative z-10 max-w-[42rem] pb-5 lg:pb-0">
            <p className="mb-4 inline-flex items-center rounded-full bg-[#fff1a8] px-4 py-2 text-xs font-black text-gray-900 shadow-sm md:text-sm">
              未経験から学べるオンラインスクール
            </p>
            <h1 className="font-black leading-[1.16] tracking-tight text-gray-900 md:leading-[1.12]">
              <span className="block whitespace-nowrap text-[2.25rem] sm:text-5xl md:text-6xl">顔出しも、</span>
              <span className="block whitespace-nowrap text-[2.25rem] sm:text-5xl md:text-6xl">撮影もいらない。</span>
              <span className="relative mt-2 inline-block whitespace-nowrap text-[2.25rem] text-primary sm:text-5xl md:text-6xl">
                完全在宅で学ぶ
                <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-1 rounded-full bg-[#ffd84d]" aria-hidden="true" />
              </span>
              <span className="mt-2 block whitespace-nowrap text-[clamp(1.45rem,6.7vw,3.75rem)]">
                AI×非属人YouTube運営
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-gray-700 md:text-lg md:leading-9">
              YouTubeでの稼ぎ方を、基礎から体系的に。
              <br className="hidden sm:block" />
              企画・台本・編集・投稿・分析まで、AIを活用すれば効率化できます。
            </p>

            <div className="mt-6 grid max-w-xl grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {["完全在宅", "顔出し・本名公開なし", "LINE質問無制限", "未経験大歓迎"].map(
                (item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap rounded-xl border border-red-100 bg-white px-2 py-2.5 text-center text-[10px] font-black text-gray-800 shadow-sm sm:px-3 sm:text-xs"
                  >
                    <span className="mr-1 text-primary">✓</span>
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9">
              <ConsultationLink label="無料個別面談で相談する" />
              <p className="mt-4 text-xs leading-5 text-gray-500">
                ZoomまたはLINE通話・約30〜60分／強引な勧誘は行いません
              </p>
            </div>
          </div>

          <div
            className="relative -mx-4 h-[300px] overflow-hidden sm:h-[390px] lg:hidden"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 84%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 12%, black 84%, transparent 100%)",
            }}
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="自宅のパソコンで学習する女性"
              fill
              sizes="(max-width: 1023px) 100vw, 1px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <div className="border-y border-red-100 bg-red-50">
        <p className="mx-auto max-w-4xl px-4 py-4 text-center text-xs font-medium leading-6 text-red-900 md:text-sm">
          YouTube Media Labは有料のオンラインスクールです。具体的なコース内容や費用は、個別面談でご案内します。
        </p>
      </div>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="FOR YOU">
            こんなお悩みはありませんか？
          </SectionHeading>
          <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 md:gap-4">
            {concerns.map((concern) => (
              <div
                key={concern}
                className="flex items-start gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50/80 to-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-sm font-medium leading-6 text-gray-700 md:text-base">
                  {concern}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-primary/15 bg-white p-6 text-center shadow-xl shadow-red-900/5 md:p-10">
            <p className="mb-3 text-xs font-black tracking-[0.18em] text-primary">THE REAL ISSUE</p>
            <h3 className="text-xl font-black leading-8 text-gray-900 md:text-3xl md:leading-tight">
              止まってしまう原因は、才能ではなく
              <br className="hidden md:block" />
              <span className="relative inline-block text-primary">
                学ぶ順番と、質問できる環境がないこと。
                <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full bg-[#ffd84d]" aria-hidden="true" />
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 [text-wrap:pretty] md:text-base">
              ネットに点在する情報を集めるより、必要なことだけを順番に学び、
              <br className="hidden md:block" />
              わからない瞬間に講師へ直接確認できる方が、迷いを減らして学習を続けやすくなります。
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="HOW IT WORKS">
            顔出し・撮影なしでも進められる仕組み
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-4">
            {curriculum.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-red-100 bg-white p-6 shadow-lg shadow-red-900/5"
              >
                <p className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffd84d] text-xl font-black text-gray-900 shadow-sm">
                  {item.number}
                </p>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ConsultationLink label="自分に合う学び方を相談する" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="LEARNING">
            動画を作る力と、運営する力を
            <br className="hidden md:block" />
            体系的に学べます
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-10">
              <p className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-primary">
                動画制作スキル
              </p>
              <h3 className="mb-4 text-2xl font-black">動画編集</h3>
              <p className="mb-6 text-sm leading-7 text-gray-600 md:text-base">
                Premiere ProとVrewの基本操作から、カット・テロップ・音声・書き出しまで、実際の制作に必要な編集スキルを順番に学びます。
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-700">
                {["Premiere Pro・Vrewの基本操作", "見やすい動画の編集", "制作物へのフィードバック"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">●</span>{item}
                    </li>
                  ),
                )}
              </ul>
            </article>
            <article className="rounded-3xl bg-primary p-7 text-white shadow-xl shadow-primary/15 md:p-10">
              <p className="mb-4 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                チャンネル運営スキル
              </p>
              <h3 className="mb-4 text-2xl font-black">非属人YouTube運営</h3>
              <p className="mb-6 text-sm leading-7 text-red-50 md:text-base">
                顔出しや撮影を前提とせず、企画・台本・ナレーション・投稿管理・運用改善まで、チャンネル運営の全体像を学びます。
              </p>
              <ul className="space-y-3 text-sm font-medium text-white">
                {["顔出し・撮影機材なし", "AIを活用した企画・台本", "投稿後の分析と改善"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span>●</span>{item}
                    </li>
                  ),
                )}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="SUPPORT">
            ひとりで止まらないためのサポート
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {supports.map((support) => (
              <article
                key={support.title}
                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-7"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-[10px] font-black tracking-tight text-primary">
                  {support.mark}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                    {support.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">{support.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-xs leading-6 text-amber-900 md:text-sm">
            ※ サポートはスキル習得を目的としています。収益・案件獲得・就職を保証するものではなく、学習成果には個人差があります。
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="VOICE">受講された方の声</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {voices.map((voice) => (
              <article
                key={voice.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md shadow-gray-200/50"
              >
                <div className="mb-5 flex items-center gap-4">
                  <VoiceSilhouette tone={voice.tone} />
                  <div>
                    <p className="text-xs font-black tracking-[0.14em] text-primary">STUDENT VOICE</p>
                    <p className="mt-1 text-sm font-bold text-gray-700">{voice.label}</p>
                  </div>
                </div>
                <p className="border-t border-gray-100 pt-5 text-sm leading-7 text-gray-700">「{voice.text}」</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-gray-500">
            ※ 個人の感想です。受講成果には個人差があります。
          </p>
        </div>
      </section>

      <section id="profile" className="scroll-mt-5 bg-gradient-to-br from-red-50 via-white to-[#fff9dc] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-red-900/10 ring-1 ring-red-100">
          <div className="grid md:grid-cols-[340px_1fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-primary md:min-h-[460px]">
              <Image
                src="/images/yuuhi-profile.jpg"
                alt="YouTube Media Lab運営者 ゆうひ"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="text-xl font-black">ゆうひ</p>
                <p className="mt-1 text-xs font-bold tracking-wider text-white/80">株式会社ult Adam 代表取締役</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary">PROFILE</p>
              <h2 className="mb-5 text-2xl font-black md:text-3xl">誰から学ぶか、確かめてください。</h2>
              <p className="text-sm leading-8 text-gray-600 md:text-base">
                株式会社ult Adam代表取締役・YouTube Media Lab運営統括。動画編集と非属人YouTube運営を、未経験の方にもわかりやすい順序で学べる環境づくりに取り組んでいます。個別面談では、今の状況や目的を伺ったうえで、無理のない学び方を一緒に整理します。
              </p>
              <div className="mt-6 rounded-2xl border-l-4 border-primary bg-red-50 p-5">
                <p className="text-sm font-bold leading-7 text-gray-800">
                  <span className="block">わからないまま一人で悩ませない。</span>
                  <span className="block">次にやることが見えるサポートを大切にしています。</span>
                </p>
              </div>
            </div>
          </div>
          <div className="results-gold-panel border-t border-[#e2b84d] p-6 md:p-9">
            <div className="mb-6 text-center">
              <p className="text-xs font-black tracking-[0.2em] text-[#a97809]">RESULTS</p>
              <h3 className="mt-2 text-xl font-black text-gray-900 md:text-2xl">数字で見る、運営者の実績</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {results.map((result) => (
                <div
                  key={result.value}
                  className="result-gold-card flex min-h-32 flex-col items-center justify-center rounded-2xl border px-3 py-5 text-center last:col-span-2 md:last:col-span-1"
                >
                  <p className="result-gold-value whitespace-nowrap text-2xl font-black tracking-tight md:text-[1.65rem]">
                    {result.value}
                  </p>
                  <p className="mt-2 text-[11px] font-bold leading-5 text-gray-700">{result.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[11px] leading-5 text-gray-500">
              ※ 運営者本人の実績です。受講後の成果を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ">よくある質問</SectionHeading>
          <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white px-5 shadow-sm md:px-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-gray-900 marker:content-none">
                  <span className="flex gap-3 text-sm leading-6 md:text-base">
                    <span className="text-primary">Q.</span>
                    {faq.q}
                  </span>
                  <span className="text-xl font-normal text-primary transition group-open:rotate-45" aria-hidden="true">
                    ＋
                  </span>
                </summary>
                <p className="ml-8 mt-3 text-sm leading-7 text-gray-600 md:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="relative scroll-mt-5 overflow-hidden bg-gradient-to-br from-primary via-[#a90d29] to-[#700718] px-4 py-16 md:py-24">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ffd84d]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="relative text-white md:sticky md:top-8">
            <p className="mb-3 inline-block rounded-full bg-[#ffd84d] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-gray-900">
              FREE CONSULTATION
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              まずは、今のお悩みを
              <br />
              お聞かせください。
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/85 md:text-base">
              今の状況や目標を伺い、学べる内容や進め方を丁寧にご説明します。最大限お力になれるよう、誠実に対応いたします。
            </p>
            <div className="mt-7 space-y-3 text-sm font-bold text-white">
              <p><span className="mr-2 text-[#ffd84d]">✓</span>ZoomまたはLINE通話</p>
              <p><span className="mr-2 text-[#ffd84d]">✓</span>所要時間 約30〜60分</p>
              <p><span className="mr-2 text-[#ffd84d]">✓</span>相談無料・強引な勧誘なし</p>
            </div>
          </div>

          <div className="relative rounded-3xl bg-white p-6 shadow-2xl md:p-9">
            <p className="mb-2 text-xs font-black tracking-[0.18em] text-primary">
              RESERVATION
            </p>
            <h3 className="text-2xl font-black leading-snug text-gray-900 md:text-3xl">
              ご都合のよい日時を
              <br />
              選ぶだけで予約できます。
            </h3>

            <ol className="my-7 space-y-4">
              {[
                "予約ページを開く",
                "ご希望の日時と必要事項を入力",
                "予約完了後、LINEでご案内を確認",
              ].map((step, index) => (
                <li key={step} className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#ffd84d] text-sm font-black text-gray-900">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold leading-6 text-gray-800">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href={CONSULTATION_URL}
              className="consultation-cta flex min-h-20 w-full items-center justify-center whitespace-nowrap rounded-2xl bg-primary px-6 py-5 text-center text-lg font-black text-white ring-4 ring-[#ffd84d]/75 transition hover:-translate-y-0.5 hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-[#ffd84d] sm:text-xl"
            >
              無料個別面談の日時を選ぶ
              <span className="ml-2" aria-hidden="true">→</span>
            </a>
            <p className="mt-5 text-center text-xs leading-5 text-gray-500">
              ボタンを押すとYouTube Media Labの予約ページへ移動します。
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#540511] px-4 py-8 text-center">
        <p className="mb-3 text-xs text-white/50">
          © {new Date().getFullYear()} YouTube Media Lab / 株式会社ult Adam
        </p>
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/50 underline underline-offset-4 transition hover:text-white"
        >
          プライバシーポリシー
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <a
          href={CONSULTATION_URL}
          className="consultation-cta flex min-h-14 w-full items-center justify-center whitespace-nowrap rounded-xl bg-primary px-5 text-base font-black text-white ring-2 ring-[#ffd84d]"
        >
          無料個別面談を予約する
          <span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
