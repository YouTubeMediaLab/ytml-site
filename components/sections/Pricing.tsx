import { Reveal } from "@/components/Reveal";
import { CTAButton, CTANote } from "@/components/CTAButton";
import { DISCLAIMERS } from "@/config/site";
import {
  COURSE_ORDER,
  OFFER,
  RECOMMENDED_COURSE,
  discountPercent,
  getCourse,
  man,
  savingIncTax,
  withTax,
  yen,
  type Course,
} from "@/config/offer";

const notes = [
  "表示価格はすべて税込です。",
  "お支払い方法は銀行振込・クレジットカード・分割払いからお選びいただけます（詳細はお問い合わせください）。",
  "契約書面を受領した日から8日以内であれば、書面または電磁的記録の送信により契約を解除でき、受領済みの金銭は全額返金します（クーリング・オフ）。この期間の経過後は、返金・中途解約はできません。",
  "Adobe Premiere Proおよび制作で使用するAIツールの利用料は受講料に含まれません（いずれも無料版から始められるものを含みます）。",
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="section-subtitle">PRICING</p>
        <h2 className="section-title jp-tight">
          今後、現在の価格では提供しません。
        </h2>
        <div className="title-divider" />

        {/* 学べる内容は「売上につなげる4つの設計」とコース紹介で見せているため、ここでは繰り返さない */}

        {/* 価格カード */}
        <div className="space-y-8">
          {COURSE_ORDER.map((key) => (
            <PriceCard
              key={key}
              course={getCourse(key)}
              recommended={key === RECOMMENDED_COURSE}
            />
          ))}
        </div>

        {/* 改定の予告。各カードの吹き出しで金額は出ているので、ここでは繰り返さない */}
        <Reveal>
          <div className="mt-8 rounded-2xl border-2 border-primary bg-sky-50 px-5 py-4 md:px-7 md:py-5">
            <p className="jp-tight text-sm leading-8 text-gray-700">
              <span className="mr-2 inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-white">
                先着{OFFER.capacity}名限定価格
              </span>
              {OFFER.capacity}
              名に達した時点で上記のとおり価格を改定します。適用状況は個別相談の際にお伝えします。
            </p>
          </div>
        </Reveal>

        {/* 注意事項 */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="mb-3 text-sm font-bold text-gray-900">
            料金に関するご注意
          </h3>
          <ul className="space-y-2">
            {notes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 text-sm leading-7 text-gray-600"
              >
                <span className="mt-0.5 flex-shrink-0 text-gray-400">・</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 rounded-xl bg-gray-100 p-5 text-center text-[11px] leading-6 text-gray-500">
          ※ {DISCLAIMERS.income}
        </p>

        <div className="mx-auto mt-10 max-w-md">
          <CTAButton />
          <CTANote className="mt-3" />
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  course,
  recommended = false,
}: {
  course: Course;
  recommended?: boolean;
}) {
  const current = withTax(course.currentPriceExTax);
  const future = withTax(course.futurePriceExTax);
  const percent = discountPercent(course);
  const saving = savingIncTax(course);

  return (
    <Reveal>
      <div className="relative">
        {/* 吹き出しはカードの外・上に置き、価格へ重ならないようにする */}
        {course.priceChanges && (
          <div className="relative z-10 mx-auto mb-3.5 w-fit max-w-full">
            <p className="jp-tight rounded-lg border-2 border-primary bg-white px-4 py-2 text-center text-xs font-bold leading-snug text-primary-dark md:text-sm">
              先着{OFFER.capacity}名終了後
              <span className="mx-1 text-primary">
                {man(current)}→{man(future)}
              </span>
              へ改定
            </p>
            <span
              aria-hidden="true"
              className="absolute -bottom-[6px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-primary bg-white"
            />
          </div>
        )}

        <div
          className={`overflow-hidden rounded-2xl bg-white ${
            recommended
              ? "border-2 border-primary shadow-[0_22px_54px_-26px_rgba(7,130,244,0.7)]"
              : "border border-gray-200 shadow-sm"
          }`}
        >
          {recommended && (
            <p className="relative overflow-hidden bg-gradient-to-b from-[#3a9bff] via-primary to-primary-dark px-5 py-3 text-center text-[0.82rem] font-bold text-white">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent"
              />
              <span className="relative">
                ★ いちばん選ばれています　おすすめコース
              </span>
            </p>
          )}

          <div className="p-5 md:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="jp-tight text-[1.05rem] font-black text-gray-900">
                {course.name}
              </h3>
              {course.priceChanges && (
                <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-primary">
                  先着{OFFER.capacity}名限定
                </span>
              )}
            </div>

            <p className="mt-1.5 text-xs text-gray-500">
              サポート期間：{course.supportPeriod}
              <span className="mx-2 text-gray-300">|</span>
              {course.style}
            </p>

            <div className="mt-5 rounded-xl bg-gray-50 p-4 md:p-5">
              {course.priceChanges ? (
                <>
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="text-xs font-medium text-gray-500">
                      先着{OFFER.capacity}名終了後の価格
                    </span>
                    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="text-[1.3rem] font-bold text-gray-400 line-through decoration-primary decoration-2 md:text-[1.5rem]">
                        {yen(future)}
                      </span>
                      <span className="text-[11px] text-gray-400">（税込）</span>
                    </span>
                  </div>

                  <div className="mt-3 border-t border-gray-200 pt-3">
                    <p className="text-xs font-bold text-primary">
                      {OFFER.startLabel}〜 先着{OFFER.capacity}名限定
                    </p>
                    <p className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
                      <span className="text-[2.2rem] font-black leading-none text-primary md:text-[2.7rem]">
                        {yen(current)}
                      </span>
                      <span className="text-xs text-gray-500">（税込）</span>
                    </p>
                    <p className="mt-2 text-[0.82rem] font-medium text-gray-600">
                      税抜 {yen(course.currentPriceExTax)}
                    </p>
                  </div>

                  <p className="mt-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-lg bg-gradient-to-b from-primary to-primary-dark px-3.5 py-2.5 text-center text-[0.85rem] font-bold leading-snug text-white">
                    <span>今なら {man(saving)} お得</span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs text-primary-dark">
                      {percent}％OFF
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs font-medium text-gray-500">価格</p>
                  <p className="mt-1 flex flex-wrap items-baseline gap-x-2.5">
                    <span className="text-[2rem] font-black leading-none text-gray-900 md:text-[2.3rem]">
                      {yen(current)}
                    </span>
                    <span className="text-xs text-gray-500">（税込）</span>
                  </p>
                  <p className="mt-2 text-[0.82rem] font-medium text-gray-600">
                    税抜 {yen(course.currentPriceExTax)}
                  </p>
                  <p className="mt-3 rounded-lg bg-white px-3.5 py-2.5 text-xs leading-6 text-gray-600">
                    このコースの価格は据え置きです。先着{OFFER.capacity}
                    名の受付終了後も変更しません。
                  </p>
                </>
              )}
            </div>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              {course.positioning}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
