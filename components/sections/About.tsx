export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "体系的なカリキュラム",
      desc: "「何から手をつけるか」で迷わないよう、基礎から応用まで順序立てて学べる構成。手順通りに進めれば、着実にスキルが身につきます。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "LINEで無制限に質問OK",
      desc: "サポート期間中はLINEで質問し放題。「聞いていいのかな」と遠慮する必要はありません。わからないところで止まらないサポート体制を整えています。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Adobe Premiere Proで即戦力",
      desc: "業界標準ソフト「Adobe Premiere Pro」を使用。習得したスキルがそのまま実務・副業で使える内容です。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "自分のペースで学習",
      desc: "動画教材はいつでも繰り返し視聴可能。仕事・育児・家事の合間でも無理なく進められます。",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-subtitle">ABOUT</p>
        <h2 className="section-title">YouTube Media Labとは</h2>
        <div className="title-divider" />

        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed">
            YouTube Media Labは、<strong className="text-gray-900">Adobe Premiere Proによる動画編集</strong>と、
            <strong className="text-gray-900">顔出し不要の非属人YouTubeチャンネル運営</strong>を
            体系的に学べるオンラインスクールです。
            <br /><br />
            企画・台本・ナレーション・投稿管理・外注化まで、
            <br />
            チャンネル運営に必要なスキルを一から丁寧に学べます。
          </p>
        </div>

        {/* 非属人YouTube Section — light version */}
        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 mb-12 overflow-hidden">
          {/* Subtle dot accent */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(196,18,48,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                非属人YouTubeとは？
              </span>
            </div>
            <h3 className="font-black text-gray-900 text-xl md:text-2xl mb-6 leading-snug">
              顔を出さなくていい。撮影しなくていい。
              <br />
              それでも、再生されるチャンネルは作れる。
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🎭",
                  title: "顔出し・個人情報一切不要",
                  desc: "顔出しや本名の公開なしに運営できるYouTubeチャンネルのスタイルです。プライバシーを守ったまま活動できます。",
                },
                {
                  icon: "📷",
                  title: "撮影機材・スタジオ不要",
                  desc: "カメラや照明、撮影スペースは必要ありません。PCとナレーション（またはAI音声）だけで動画を制作できます。",
                },
                {
                  icon: "🏠",
                  title: "完全在宅でOK",
                  desc: "自宅・カフェなど場所を選ばず運営できます。通勤不要で、自分のライフスタイルに合わせた働き方が可能です。",
                },
                {
                  icon: "⏰",
                  title: "自由な時間で運営できる",
                  desc: "撮影スケジュールに縛られないため、本業や育児と並行しながら無理なく続けられます。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Target audience */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
          <h3 className="font-bold text-gray-900 text-xl mb-6 text-center">
            こんな方におすすめです
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "副業として動画編集スキルを身につけたい方",
              "顔出しなしでYouTubeを運営したい方",
              "SNS動画制作のスキルを高めたい方",
              "事業でYouTubeを活用したい個人・法人の方",
              "撮影機材なしで動画制作を始めたい方",
              "独学では限界を感じている方",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
