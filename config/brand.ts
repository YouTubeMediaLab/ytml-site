/**
 * 屋号・ドメイン・法人情報の一元管理。
 *
 * 2026年8月、事業の括りをSNSマーケティング全体へ広げたのに合わせて
 * 「YouTube Media Lab」から「SNS Media Lab」へ改称した。
 *
 * 屋号を変えるときは、必ずこのファイルだけを直せば済む状態を保つこと。
 */

export const BRAND = {
  /** 表示名 */
  name: "SNS Media Lab",
  /** 読み。特商法・会社概要で併記する */
  nameJa: "SNSメディアラボ",
  /** ロゴの2段組みで使う分割表記 */
  nameLine1: "SNS",
  nameLine2: "Media Lab",
  /** 法人名 */
  legalName: "株式会社ult Adam",
  representative: "吉柳 雄飛",
  address: "東京都中央区銀座7-13-6 サガミビル2階",
  tel: "080-6880-9400",
  email: "snsmedialab.official@gmail.com",
} as const;

/**
 * 公開URL。
 *
 * 2026年8月、屋号の変更に合わせて youtubemedialab.com から移行した。
 * 旧ドメインはVercel側で 308 リダイレクトを設定して残してあるため、
 * 検索や既存リンクからの流入は自動でこちらへ着地する。
 * 旧ドメインの契約は転送を効かせ続けるために解約しないこと。
 */
export const SITE_URL = "https://www.snsmedialab.com";

/** OGP画像（絶対URL） */
export const OG_IMAGE = `${SITE_URL}/images/og-sns-media-lab.png`;
