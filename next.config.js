/**
 * SNSごとの流入計測を維持したまま、告知に使うURLを短くする。
 *
 * permanent: false（307）にしておくことで、UTAGE側のURLや計測タグが
 * 将来変わっても、検索エンジンやブラウザに恒久転送として固定されない。
 */
const lineRedirects = [
  ["x", "TZ91owa4FGY2"],
  ["youtube", "VCaEbv9wIJs7"],
  ["instagram", "MeYccQjUqUmB"],
  ["threads", "F5uNHMEdLXJy"],
  ["note", "defnwV0AIjKh"],
  ["tiktok", "YGVbbfFsB5sI"],
  ["hp", "a8h3dWaJWUsh"],
  ["lp", "i8AIBi8Zyp8u"],
].map(([source, mtid]) => ({
  source: `/line/${source}`,
  destination: `https://online.snsmedialab.com/line/open/Uih49tVZnQlv?mtid=${mtid}`,
  permanent: false,
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return lineRedirects;
  },
}

module.exports = nextConfig
