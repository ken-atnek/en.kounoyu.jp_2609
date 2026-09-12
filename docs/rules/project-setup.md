# プロジェクトセットアップ方針

一般的なReact / Next.jsとSass / CSSの構築ルールは、共通プレイブックを参照します。

このファイルには英語版サイトの採用構成と、セットアップ時に確定した差分だけを記録します。

## 採用バージョン

- Next.js 16.3.4
- React 19.2.8
- App Router
- TypeScript
- SCSS / CSS Modules
- 静的書き出し `output: 'export'`

実際のバージョンは `package.json` とlockfileを正とします。

## 公開環境

- 本番サイト: `https://www.kounoyu.jp/`
- 現行英語サイト: `https://www.kounoyu.jp/en/`
- 英語版デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 英語版公開URL: `https://en.kounoyu.jp/`
- 公開位置: サブドメインのルート `/`
- 公開サーバー構成: 未確認
- ビルド成果物の配置方法: 未確認

## セットアップ済みの項目

- package manager: npm
- lockfile: `package-lock.json`
- `basePath`: 設定なし
- `assetPrefix`: 設定なし
- `trailingSlash: true`
- 画像: `images.unoptimized: true`
- ESLint / Prettier / Stylelintのscriptsを設定済み

## 未確定の項目

- デモ・本番の環境変数
- `public/db/` と管理画面連携の有無
- 既存サーバー上で維持するファイル

## Sass / CSS

- 共通構成はSass / CSSプレイブックの `workflow.md` を参照する
- 実際に採用するfoundation構成とデザイントークンは、デザイン確定後に追記する
- フォント、ブレイクポイント、既存mixinは英語版の実装開始前に確定する
- 日本語版のフォント設定をそのまま英語版へ流用しない

## SEO

- デモ環境ではnoindexにする
- 本番では英語版の正式URLをcanonical、OGP、sitemapへ使用する
- 日本語版との `hreflang` 方針を決める
- 環境変数名とbuild scriptsは、実装時に確定したものだけ記録する

## 今後追記する内容

- 公開手順
- サーバー側リダイレクト
- 管理画面・JSON連携仕様
- デモ環境と本番環境の切り替え方法
