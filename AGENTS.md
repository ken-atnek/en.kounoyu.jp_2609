# AGENTS.md

## プロジェクト概要

このプロジェクトは、旅館こうの湯公式サイトの英語版リニューアル案件です。

- 現行日本語サイト: `https://www.kounoyu.jp/`
- 現行英語サイト: `https://www.kounoyu.jp/en/`
- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 新しい公開URL: `https://en.kounoyu.jp/`
- 公開位置: 英語サブドメインのルート `/`
- 案件種別: 既存英語サイトのリニューアル

日本語版リニューアルのページ構成とデザインを参照しつつ、英語利用者向けの導線、表記、SEOを別途整理します。

## 共通プレイブック

実装判断は、次の共通プレイブックを親ルールとして扱います。

- `__react-nextjs-playbook/`
- `__sass-css-playbook/`

特に次を優先して確認します。

- React / Next.js: `workflow.md`、`nextjs-static-export.md`、`review.md`
- Sass / CSS: `workflow.md`、`layout.md`、`responsive.md`

案件側のMarkdownには、英語版固有のURL、ページ構成、施設表記、公開環境、データ連携だけを残します。

## 技術方針

- Next.js 16.3系を基準にする
- React 19.2.8（Next.js 16.3.4の公式scaffoldで採用されたバージョン）
- App Router
- TypeScript
- SCSS / CSS Modules
- `output: 'export'` による静的書き出しを基本方針とする
- 実際のバージョンは `package.json` とlockfileを正とする

## 作業前の確認順

1. この `AGENTS.md`
2. React / Next.js共通プレイブック
3. `docs/PAGE_STRUCTURE.md`
4. 作業対象に関係する案件固有Markdown
5. SCSSを触る場合はSass / CSS共通プレイブック

共通プレイブックと案件側で矛盾する場合は、実装を始める前に差分を明示します。

## 案件固有の作業方針

- まず日本語版リニューアルの確定構成と、現行英語サイトの掲載情報を照合する
- 日本語版の文言やページ構成を、そのまま英語版の確定仕様として扱わない
- 英語版の正式な施設名、地名、温泉用語の表記を統一する
- 予約導線、電話番号、外部リンクは英語利用者向けの遷移先を確認する
- 変更は小さい単位で行い、ページ構成や導線を勝手に変更しない
- コンテンツ未確定時は、確定情報と仮情報が分かるようにする

## SEO・公開上の注意

- HTMLの `lang` は英語版として設定する
- canonical、OGP、sitemapには `https://en.kounoyu.jp/` を使用する
- 日本語版との `hreflang` 方針を確認する
- デモ環境はnoindexとし、本番URLをcanonicalに誤出力しない
- サブドメイン直下公開を前提とし、特別な理由がなければ `basePath` を設定しない
- デモ環境と本番環境でasset pathと内部リンクが変わらないことを確認する
- 旧英語サイトからURLが変わる場合は、サーバー側リダイレクトを整理する

## ビルド・レビュー

- ビルド運用はReact / Next.js共通プレイブックの `workflow.md` に従う
- レビュー結果は `docs/review/REVIEW_YYYY-MM-DD.md` 形式で管理する
- 共有用Markdownにはマシン固有の絶対パスを残さない
