import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <p className="text-red-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
          FREE CONSULTATION
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-snug">
          まずは無料相談から
          <br />
          はじめてみませんか？
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          「どのコースが合っているかわからない」「受講前に詳しく聞きたい」
          <br className="hidden md:block" />
          そんな方のために、無料の個別相談をご用意しています。
          <br />
          強引な勧誘は一切行いませんのでお気軽にどうぞ。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto btn-primary text-base md:text-lg py-4 px-10 shadow-lg shadow-primary/20"
          >
            無料個別相談に申し込む
          </Link>
        </div>

        <p className="text-gray-500 text-xs mt-6">
          ※ 無料相談はZoomまたはLINE通話にて実施します（約30〜60分）。
        </p>
      </div>
    </section>
  );
}
