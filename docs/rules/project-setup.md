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
- `cross-env`をdevDependenciesへ追加済み
- デモ用: `npm run build:demo`
- 本番用: `npm run build:prod`
- 環境判定: `NEXT_PUBLIC_IS_REAL_PROD`
- metadata基準URL: `NEXT_PUBLIC_METADATA_BASE`

## 未確定の項目

- `public/db/` と管理画面連携の有無
- 既存サーバー上で維持するファイル

## 共通実装

- `src/app/layout.tsx`: `lang="en"`、共通SVG定義、本番canonical、デモ環境のnoindexを共通出力する
- `src/components/common/ExternalLink.tsx`: 外部リンクの別タブ表示と安全属性を共通化する
- `src/components/common/ScrollLink.tsx`: LP内のアンカーへのスムーズスクロールを担当する
- `src/lib/env.ts`: 本番環境の判定とmetadataの基準URLを管理する
- `src/app/template.tsx` は現時点では追加しない。1ページLPで別ページ遷移がなく、`ScrollLink.tsx` でページ内移動を処理できるため
- 将来 `template.tsx` を導入する場合は、`page.tsx` との `<main>` の重複を避ける

## Sass / CSS

- 共通構成はSass / CSSプレイブックの `workflow.md` を参照する
- 構築段階の実装対象はPCのみとする
- スマートフォンのレスポンシブ調整はユーザーが行い、CodexはSP用スタイルやmedia queryを追加しない
- メインフォントはGoogle Sans 400 / 700、アクセントはEB Garamond 400 / 700を `next/font/google` で読み込む
- 日本語版の `src/styles/foundation/` を英語版の実装ベースとしてコピー済み
- foundationにはsettings、typography、colors、breakpoints、interaction、svg、ui、resetを配置する
- `_index.scss` はreset以外の変数、function、mixinをまとめてforwardする
- resetの読み込みと英語版全体スタイルへの適用は、`globals.scss`を整える段階で確定する
- フォント、色、ブレイクポイントの値は日本語版由来の仮設定とし、英語版デザインに合わせて確認する
- `_typography.scss` の日本語版フォントmixinは、そのまま英語版の最終設定として扱わない
- `_ui.scss` の `item-link` mixinが参照する `$main-green` は未定義のため、採用時に英語版の色設計へ合わせて修正する

## SVG定義

- 日本語版と同じく、`public/svg/object.svg`へ共通SVGシンボルをまとめる
- `src/components/SvgDefs.tsx`でSVG定義を取得し、ルートレイアウトから全ページ共通で読み込む
- 使用側は `<use href="#シンボルID" />` で参照する
- 現在のシンボルID: `svgLogo`、`svgLogoEn`、`svgSnsInsta`、`svgSnsFB`
- `basePath`は設定しないため、取得パスは `/svg/object.svg` とする

## SEO

- デモ環境ではnoindexにする
- 本番では英語版の正式URLをcanonical、OGP、sitemapへ使用する
- 日本語版との `hreflang` 方針を決める
- デモ環境では `NEXT_PUBLIC_IS_REAL_PROD=false`、`NEXT_PUBLIC_METADATA_BASE=https://en-demo-kounoyu-jp.tuna-pic.co.jp/` を使用する
- 本番環境では `NEXT_PUBLIC_IS_REAL_PROD=true`、`NEXT_PUBLIC_METADATA_BASE=https://en.kounoyu.jp/` を使用する
- `layout.tsx` のcanonicalとrobots metadataは上記環境変数と連動済み。title、description、`robots.ts`、`sitemap.ts`は別途実装する

## 今後追記する内容

- 公開手順
- サーバー側リダイレクト
- 管理画面・JSON連携仕様
- デモ環境と本番環境への具体的な配置手順
