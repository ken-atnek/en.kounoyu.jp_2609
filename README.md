# Ryokan Kounoyu English LP

旅館こうの湯公式サイトの英語版リニューアルプロジェクトです。

## 制作対象

- 現行英語サイト: `https://www.kounoyu.jp/en/`
- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 公開URL: `https://en.kounoyu.jp/`
- 形式: 1ページ完結の英語LP
- PCデザイン: `docs/screenshot/こうの湯_PC_English LP.jpg`
- SPデザイン: 未配置

## 採用予定

- Next.js 16.3.4
- React 19.2.8
- App Router
- TypeScript
- SCSS / CSS Modules
- `output: 'export'`

実際のバージョンは `package.json` とlockfileを正とします。

## 現在の状態

- Markdownの初期整理済み
- LPのページ・セクション構成を整理済み
- Next.jsプロジェクトの初期セットアップ済み
- 公開サーバー構成、データ連携、SP仕様は未確定

## ドキュメント

- `AGENTS.md`: 案件固有の基本方針
- `docs/PAGE_STRUCTURE.md`: LPのセクション構成
- `docs/rules/project-setup.md`: セットアップ時に確定する案件差分
- `docs/rules/nextjs-export.md`: 英語サブドメイン直下での静的書き出し方針
- `docs/rules/coding-style.md`: 英語LP固有の実装ルール
- `docs/rules/fetch-pattern.md`: `public/db/`連携を採用する場合の案件仕様
- `docs/rules/checklist.md`: 案件固有チェックリスト
- `docs/seo/SEO_SETUP.md`: LPのSEO設計
- `docs/seo/SEO_AUDIT_REQUEST_TEMPLATE.md`: 英語LP用SEOレビュー依頼
- `docs/review/README.md`: 日付別レビューの保存ルール

React / Next.jsとSass / CSSの一般的な実装判断は、共通プレイブックを参照します。

## 次の作業

1. PCデザインを基準にセクション単位で実装
2. SP表示の方針を確認
3. SEO、外部リンク、交通情報を公開前に確認
