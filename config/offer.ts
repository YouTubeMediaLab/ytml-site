/**
 * 価格・オファーの一元管理。
 *
 * ここ以外の場所に金額・人数を書かないこと。
 * 表示はすべて税込を主、税抜を従にしている（総額表示義務への対応）。
 */

export type CourseKey = "videoEditing" | "youtubeHalf" | "youtubeYear";

export type Course = {
  key: CourseKey;
  /** 正式名称 */
  name: string;
  /** 表につける短い名前 */
  shortName: string;
  /** 先着100名の価格（税抜） */
  currentPriceExTax: number;
  /** 100名終了後の価格（税抜） */
  futurePriceExTax: number;
  /** 100名終了後に価格を改定するか */
  priceChanges: boolean;
  supportPeriod: string;
  /** 学習スタイル */
  style: string;
  /** 一言での位置づけ */
  positioning: string;
};

export const OFFER = {
  /** 特別価格の対象人数 */
  capacity: 100,
  /** 特別価格の開始時期 */
  startLabel: "2026年8月",
  taxRate: 0.1,
} as const;

export const COURSES: Record<CourseKey, Course> = {
  videoEditing: {
    key: "videoEditing",
    name: "動画編集コース",
    shortName: "動画編集",
    currentPriceExTax: 90000,
    futurePriceExTax: 90000,
    priceChanges: false,
    supportPeriod: "1年間",
    style: "自主学習型",
    positioning:
      "Adobe Premiere Proの基礎から実践まで。動画編集スキルを一から体系的に習得するコースです。",
  },
  youtubeHalf: {
    key: "youtubeHalf",
    name: "非属人YouTubeコース（半年）",
    shortName: "非属人YouTube（半年）",
    currentPriceExTax: 270000,
    futurePriceExTax: 450000,
    priceChanges: true,
    supportPeriod: "6ヶ月",
    style: "自主学習型",
    positioning:
      "顔出し不要のYouTubeチャンネルを設計・運営するスキルを、6ヶ月で集中的に学ぶコースです。",
  },
  youtubeYear: {
    key: "youtubeYear",
    name: "非属人YouTubeコース（1年）",
    shortName: "非属人YouTube（1年）",
    currentPriceExTax: 450000,
    futurePriceExTax: 850000,
    priceChanges: true,
    supportPeriod: "1年間",
    style: "完全伴走型",
    positioning:
      "動画編集からチャンネル運営、外注化、さらにマーケティングとセールスまで。収入の柱を複数持つところまで、担当者と一緒に進めるコースです。",
  },
};

/**
 * 完全特別コンサル。
 * 月3名の枠で、金額は個別相談でのみ提示する（クローズド）。
 * 価格を出さない代わりに、何を得られるかと枠の少なさだけを明示する。
 */
export const PRIVATE_CONSULTING = {
  name: "完全特別コンサル",
  capacityPerMonth: 3,
  priceLabel: "個別相談にてご案内",
  positioning:
    "事業としてまとめて伸ばしたい方向けに、運営者が直接、設計から実行まで入ります。",
  points: [
    "チャンネル・商品・導線をまとめて設計します",
    "運営者が直接、実行まで並走します",
    "内容と料金は、状況を伺ったうえで個別に組み立てます",
  ],
  note: "受け入れは月3名までです。ご希望に添えない場合もあります。",
} as const;

/** 表示順（おすすめを先頭に置かず、価格の低い順で並べる） */
export const COURSE_ORDER: CourseKey[] = [
  "videoEditing",
  "youtubeHalf",
  "youtubeYear",
];

export const RECOMMENDED_COURSE: CourseKey = "youtubeYear";

/* ------------------------------------------------------------------ */
/* 計算ヘルパー                                                        */
/* ------------------------------------------------------------------ */

/** 税込価格（円未満切り捨て） */
export function withTax(priceExTax: number): number {
  return Math.floor(priceExTax * (1 + OFFER.taxRate));
}

/** 12,345 → 「¥12,345」 */
export function yen(value: number): string {
  return `¥${value.toLocaleString("ja-JP")}`;
}

/** 935000 → 「93.5万円」／ 99000 → 「9.9万円」 */
export function man(value: number): string {
  const m = value / 10000;
  const text = Number.isInteger(m) ? String(m) : m.toFixed(1);
  return `${text}万円`;
}

/** 改定後価格を基準にした割引率（整数％） */
export function discountPercent(course: Course): number {
  if (!course.priceChanges) return 0;
  const gap = course.futurePriceExTax - course.currentPriceExTax;
  return Math.round((gap / course.futurePriceExTax) * 100);
}

/** 改定までの差額（税込） */
export function savingIncTax(course: Course): number {
  if (!course.priceChanges) return 0;
  return withTax(course.futurePriceExTax) - withTax(course.currentPriceExTax);
}

export function getCourse(key: CourseKey): Course {
  return COURSES[key];
}
