"use client";

const testimonials = [
  {
    name: "A・Kさん（30代・会社員）",
    course: "動画編集コース",
    text: "パソコン初心者でPremiere Proも触ったことがなかったのですが、本当に基礎技術を1週間でマスターできました。その月から副業案件を受注し始め、月5万円の副収入を得ることができています。LINEで何度でも質問できる環境が挫折しない秘訣でした。",
    rating: 5,
  },
  {
    name: "S・Mさん（20代・フリーランス）",
    course: "非属人YouTubeコース（半年）",
    text: "企画・台本・サムネイルの考え方など、チャンネル運営に必要な知識を体系的に学べました。カリキュラムが整理されていて、順番に進めるだけでスキルが身につく設計になっていると感じました。",
    rating: 5,
  },
  {
    name: "T・Yさん（40代・個人事業主）",
    course: "非属人YouTubeコース（1年）",
    text: "自社のYouTubeチャンネルを顔出しなしで立ち上げたくてご相談しました。撮影機材なしで運営できると聞いて驚きました。伴走サポートのおかげで着実に成長し、チャンネル経由で毎月10件以上の問い合わせが来るようになりました。",
    rating: 5,
  },
  {
    name: "Y・Nさん（20代・主婦）",
    course: "動画編集コース",
    text: "育児の合間に少しずつ学習を進められました。動画教材を繰り返し見られるので、自分のペースで学べたのが良かったです。LINEの質問対応が丁寧で、挫折せずに続けられました。",
    rating: 5,
  },
  {
    name: "K・Sさん（30代・会社員）",
    course: "非属人YouTubeコース（半年）",
    text: "副業としてYouTubeを始めたかったのですが、何から手をつければいいか全くわからない状態でした。チャンネル設計から学べたことで迷わず進められ、受講開始2ヶ月目に収益化を達成。今では月30万円以上が安定して入るようになりました。",
    rating: 5,
  },
  {
    name: "H・Tさん（50代・自営業）",
    course: "非属人YouTubeコース（1年）",
    text: "年齢的に新しいことを学ぶのは不安でしたが、顔出し不要・撮影機材不要と聞いてハードルが下がりました。基礎から順を追って教えていただけたので、無理なく習得できました。",
    rating: 5,
  },
  {
    name: "R・Oさん（20代・大学生）",
    course: "動画編集コース",
    text: "将来のキャリアの幅を広げるために動画編集を学びました。Adobe Premiere Proの基礎はもちろん、実践的な編集スキルまで学べて、スキルの幅が広がったと感じています。",
    rating: 5,
  },
  {
    name: "N・Aさん（30代・会社員）",
    course: "非属人YouTubeコース（半年）",
    text: "他社のスクールと比較しましたが、カリキュラムの体系性とサポートの手厚さが決め手でした。LINEの質問対応レスポンスが早く、学習がスムーズに進みました。",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <p className="section-subtitle">VOICE</p>
        <h2 className="section-title">受講された方の声</h2>
        <div className="title-divider" />
        <p className="text-center text-gray-500 text-sm -mt-4 mb-0">
          ※ 受講成果には個人差があります。掲載は許可を得た方の体験談です。
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-72 md:w-80 flex-shrink-0"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating count={t.rating} />
                <span className="text-xs text-primary font-semibold bg-red-50 px-2 py-0.5 rounded-full">
                  {t.course}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-5">
                {t.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
