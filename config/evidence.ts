/**
 * 実績スクリーンショットの一元管理。
 *
 * 「誰の成果か」を取り違えると景表法上の問題になるため、
 * 運営者（operator）と受講生（student）を必ず別の配列で持つ。
 * 掲載順・キャプションを変えるときも、この境界は動かさないこと。
 *
 * 元データ（黒塗り前）は public/ の外（../evidence-original）に退避してある。
 * public/ に置いたファイルは、参照していなくてもURL直打ちで公開される。
 */

export type EvidenceItem = {
  src: string;
  width: number;
  height: number;
  /** カードの下に出す一行 */
  caption: string;
  /** 画像が読めない環境向けの説明 */
  alt: string;
};

/**
 * 運営者本人が運営するチャンネル。受講生の成果ではない。
 *
 * 並びは「登録者数だけの画面 → 金額が載っている画面」の順。
 * 同じ種類の画面が続くほうが見比べやすく、金額を後ろに置くことで
 * 規模の話から収益の話へ自然に進む。
 */
export const OPERATOR_EVIDENCE: EvidenceItem[] = [
  {
    src: "/evidence/op-subs-05.jpg",
    width: 1200,
    height: 859,
    caption: "チャンネル登録者 28,654人",
    alt: "運営チャンネルのYouTube Studio画面。チャンネル登録者数28,654人",
  },
  {
    src: "/evidence/op-subs-04.jpg",
    width: 1200,
    height: 857,
    caption: "チャンネル登録者 12,368人",
    alt: "運営チャンネルのYouTube Studio画面。チャンネル登録者数12,368人",
  },
  {
    src: "/evidence/op-subs-03.jpg",
    width: 1200,
    height: 857,
    caption: "チャンネル登録者 8,342人",
    alt: "運営チャンネルのYouTube Studio画面。チャンネル登録者数8,342人",
  },
  {
    src: "/evidence/op-subs-02.jpg",
    width: 1200,
    height: 857,
    caption: "チャンネル登録者 7,539人",
    alt: "運営チャンネルのYouTube Studio画面。チャンネル登録者数7,539人",
  },
  {
    src: "/evidence/op-subs-01.jpg",
    width: 1200,
    height: 854,
    caption: "チャンネル登録者 4,502人",
    alt: "運営チャンネルのYouTube Studio画面。チャンネル登録者数4,502人",
  },
  {
    src: "/evidence/op-channel-01.jpg",
    width: 770,
    height: 1200,
    caption: "登録者 6,190人／1本あたり 20〜39万回視聴",
    alt: "運営チャンネルの動画一覧。1本あたり20万〜39万回視聴",
  },
  // ここから金額が載っている画面
  {
    src: "/evidence/op-analytics-02.jpg",
    width: 1170,
    height: 949,
    caption: "登録者 8,239人／直近28日で 228.6万回視聴・推定収益 81.3万円",
    alt: "運営チャンネルのアナリティクス画面。登録者8,239人、過去28日間の視聴回数228.6万回、推定収益81.3万円",
  },
  {
    src: "/evidence/op-analytics-01.jpg",
    width: 1200,
    height: 1172,
    caption: "登録者 3,500人／直近28日で 78.0万回視聴・推定収益 15.6万円",
    alt: "運営チャンネルのアナリティクス画面。登録者3,500人、過去28日間の視聴回数78.0万回、推定収益15.6万円",
  },
];

/**
 * 受講生が運営しているSNSアカウントの投稿一覧。
 *
 * 特典④「非属人SNSの作り方」に掲載しているものと同じ画面。
 * 投稿内容が特定されないよう、再生数以外はモザイク処理をかけてある。
 * 掲載しているのは再生数だけで、収益額ではない点に注意すること。
 */
export type SnsWork = {
  src: string;
  width: number;
  height: number;
  /** 表示名。本人が特定されないようイニシャルのみ */
  person: string;
  genre: string;
  platform: string;
  /** 一番伸びた投稿の再生数 */
  best: string;
  alt: string;
};

export const STUDENT_SNS_WORKS: SnsWork[] = [
  {
    src: "/evidence/sns-aidrama.jpg",
    width: 572,
    height: 696,
    person: "Nさん",
    genre: "AIショートドラマ",
    platform: "顔出しなし・撮影なし",
    best: "40.6万回",
    alt: "受講生Nさんが運営するAIショートドラマの投稿一覧。再生数は2.4万〜40.6万回",
  },
  {
    src: "/evidence/sns-story.jpg",
    width: 483,
    height: 834,
    person: "Oさん",
    genre: "不倫・人間関係のストーリー",
    platform: "顔出しなし",
    best: "7.9万回",
    alt: "受講生Oさんが運営する人間関係ストーリーの投稿一覧。再生数は1.5万〜7.9万回",
  },
  {
    src: "/evidence/sns-love.jpg",
    width: 605,
    height: 688,
    person: "Tさん",
    genre: "恋愛系のネタ動画",
    platform: "顔全体は出さない",
    best: "11.3万回",
    alt: "受講生Tさんが運営する恋愛系ネタ動画の投稿一覧。再生数は1,632〜11.3万回",
  },
];

/** 受講生からの報告。掲載許可を取得済み。運営者の成果ではない */
export const STUDENT_EVIDENCE: EvidenceItem[] = [
  {
    src: "/evidence/st-report-01.jpg",
    width: 787,
    height: 1200,
    caption: "受講2ヶ月で収益化条件（登録者1,000人）を達成",
    alt: "受講生からの報告。収益化条件をクリアし、登録者1,000人・28日間で15.8万回視聴",
  },
  {
    src: "/evidence/st-report-02.jpg",
    width: 786,
    height: 922,
    caption: "Googleからの振込 255,633円「本業と同じレベルです」",
    alt: "受講生からの報告。Googleからの振込255,633円の入金画面",
  },
  {
    src: "/evidence/st-report-03.jpg",
    width: 668,
    height: 1200,
    caption: "Googleからの振込 256,664円／収益化3ヶ月目・外注化へ",
    alt: "受講生からの報告。Googleからの振込256,664円の入金画面",
  },
  {
    src: "/evidence/st-report-04.jpg",
    width: 584,
    height: 1200,
    caption: "2チャンネル合計 55万円（127,484円＋432,558円）",
    alt: "受講生からの報告。2つのチャンネルからGoogleの振込127,484円と432,558円",
  },
  {
    src: "/evidence/st-report-05.jpg",
    width: 727,
    height: 1200,
    caption: "Googleからの振込 661,635円",
    alt: "受講生からの報告。Googleからの振込661,635円の入金画面",
  },
];
