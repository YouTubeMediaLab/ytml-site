import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[580px] md:min-h-[680px] flex items-center pt-16 md:pt-20">

      {/* ── 背景画像 ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="YouTube Media Lab - 在宅で動画スキルを学ぶ"
          fill
          // 女性の顔が左に来るよう左寄りに配置
          className="object-cover object-[20%_center]"
          priority
        />

        {/* PC：右側だけ白くフェード → テキストを右に置く */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-white via-white/85 via-[45%] to-transparent" />

        {/* SP：全体を薄くして文字を読みやすく */}
        <div className="md:hidden absolute inset-0 bg-white/65" />
      </div>

      {/* ── コンテンツ（右寄せ） ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 flex">
        <div className="md:ml-auto md:max-w-[480px] w-full">

          {/* バッジ */}
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/25 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-bold text-primary tracking-[0.12em]">
              動画編集・非属人YouTube運営スクール
            </span>
          </div>

          {/* キャッチ */}
          <p className="text-gray-400 text-base md:text-lg font-medium mb-3 tracking-wide">
            難しいことはしなくていい。
          </p>

          {/* メインヘッドライン */}
          <h1 className="font-black leading-[1.08] mb-5">
            <span className="block text-gray-900 text-4xl md:text-5xl lg:text-6xl">
              やり方がわかれば、
            </span>
            <span
              className="block text-primary text-4xl md:text-5xl lg:text-6xl whitespace-nowrap"
              style={{ textShadow: "0 2px 24px rgba(196,18,48,0.12)" }}
            >
              迷わず進める。
            </span>
          </h1>

          {/* サブ */}
          <p className="text-lg md:text-xl font-bold text-gray-600 mb-5 tracking-wide">
            動画スキルを、体系的に。
          </p>

          {/* 説明文 */}
          <div className="text-gray-500 text-sm md:text-base leading-loose mb-9 space-y-0.5">
            <p>Adobe Premiere Proによる動画編集から、</p>
            <p className="text-gray-700 font-semibold">
              顔出し不要の非属人YouTubeチャンネル運営まで。
            </p>
            <p className="text-xs md:text-sm text-gray-400 pt-1">
              体系的なカリキュラムと手厚いサポートで、着実にスキルを習得できます。
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-9">
            <Link
              href="/contact"
              className="w-full sm:w-auto btn-primary text-sm md:text-base py-3.5 px-8 shadow-lg shadow-primary/20"
            >
              無料個別相談に申し込む
            </Link>
            <Link
              href="/#courses"
              className="w-full sm:w-auto inline-block border-2 border-gray-300 hover:border-primary text-gray-600 hover:text-primary font-bold py-3.5 px-7 rounded-lg transition-all duration-200 text-center text-sm"
            >
              コースを見る
            </Link>
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-2">
            {["顔出し不要", "撮影機材不要", "在宅でOK", "未経験から学べる"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-primary/80 bg-red-50 border border-primary/20 rounded-full px-3.5 py-1.5 font-medium"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* スクロール */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-25">
        <span className="text-[10px] text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-px h-6 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
