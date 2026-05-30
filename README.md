# YouTube Media Lab - 公式サイト

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

http://localhost:3000 でアクセスできます。

## デプロイ（Vercel）

1. [Vercel](https://vercel.com) にサインアップ
2. GitHubにこのプロジェクトをプッシュ
3. Vercelで「Import Project」→ GitHubリポジトリを選択
4. デプロイ完了

または Vercel CLI を使う場合：
```bash
npm i -g vercel
vercel
```

## ページ構成

| URL | ページ |
|-----|--------|
| / | トップ（LP） |
| /company | 会社概要 |
| /tokushoho | 特定商取引法に基づく表記 |
| /privacy | プライバシーポリシー |
| /contact | お問い合わせ |

## 要確認項目

- 会社名・代表者名・所在地・電話番号・メールアドレス
- 設立年月
- プライバシーポリシーの最終更新日
- お問い合わせフォームの送信先（API）設定

## お問い合わせフォームの本番設定

現在は静的フォーム（送信後にサンクス画面を表示）です。
本番環境では以下のいずれかを設定してください：

- **Resend** - メール送信API（推奨）
- **SendGrid** - メール送信サービス  
- **Formspree** - フォーム専用サービス

`components/ContactForm.tsx` の `handleSubmit` 関数内にAPIリクエストを追加します。
