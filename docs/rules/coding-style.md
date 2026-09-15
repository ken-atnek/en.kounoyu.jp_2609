# 英語LP固有のコーディング方針

React / Next.jsとSass / CSSの一般的な規約は、共通プレイブックを正とします。

このファイルには、英語版LPで採用する差分だけを残します。

## スタイル

- Tailwind CSSは使用しない
- SCSSとCSS Modulesを使用する
- ComponentのTSXと `*.module.scss` は同じディレクトリへ置く
- 全ページ共通の出力だけを `src/styles/globals.scss` へ置く
- 変数、mixin、functionなどCSSを直接出力しない定義は `src/styles/foundation/` へまとめる
- SCSSのインデントはスペース4で統一する
- SCSSのブロック内とルール間に自動の空白行を入れない
- TSXは `docs/rules/tsx-comment-rules.md`、SCSSは `docs/rules/scss-comment-rules.md` に従いコメントヘッダーを記載する

foundationの実際のファイル構成は、デザイントークンとフォントが確定してから決めます。

## Component

- HeaderとFooterは `src/components/common/` に配置する
- LP固有セクションは `src/components/top/` に配置する
- プロジェクト全体が英語サイトのため、ディレクトリ名やComponent名に `english` / `English` を重複して付けない
- LP固有Componentは `TopHero`、`TopRooms`のように用途が分かる名前にする
- `page.tsx` はセクションを並べる役割に留める
- デザイン内の小要素を、最初から細かく分割しすぎない

詳細な構成案は `docs/PAGE_STRUCTURE.md` を参照します。

## CSS命名

- CSS Modulesのclassはキャメルケースを基本にする
- グローバルclassが必要な場合はケバブケースを基本にする
- root classを単に `root` とせず、Componentの役割が分かる名前にする
- 状態classは `isOpen`、`isActive`など案件内で形式を統一する
- 既存実装開始後は、確定した命名規則を優先する

## レスポンシブ

- 現在の正式な参照デザインはPC版のみ
- PCデザインの実装難易度を理由に構成を簡略化しない
- 構築段階の実装と表示確認はPCのみを対象にする
- スマートフォンのレスポンシブ調整はユーザーが行う
- CodexはSP固有の情報順、ナビゲーション、余白、文字サイズ、表示切り替えを追加・確定しない
- CodexはSP対応を目的とする新規ブレイクポイントやmedia queryを追加しない

## フォント

- メインフォントはGoogle SansのRegular（400）とBold（700）を使用する
- アクセントフォントはEB GaramondのRegular（400）とBold（700）を使用する
- Google Sansは `public/fonts/` のWOFF2を `next/font/local` で読み込む
- EB Garamondは `next/font/google` で読み込む
- 両フォントともCSS Custom Propertiesとして全体に公開する
- コンポーネント側では `google-sans` / `eb-garamond` mixinを使用する
- EB Garamondを見出し全体へ一律適用せず、デザイン上のアクセント要素に限定する

## 画像

- 静的書き出しで利用できる方法を選ぶ
- `next/image`を使う場合は、`images.unoptimized`または採用したloader方針と合わせる
- 写真の比率、トリミング位置、スライダーの有無はデザインを確認する
- 装飾画像と意味のある画像を分け、必要な画像には英語altを設定する

## リンク

- LP内移動は確定したアンカーIDを使用する
- 外部予約、Google Maps、交通機関、周辺施設は外部リンクとして扱う
- 外部リンクの別タブ遷移は案件内で統一する
- 日本語サイトへの切り替え導線を用意する

## 未確定事項

- デザイントークン
- フォント
- ブレイクポイント（SP調整はユーザー担当）
- SPナビゲーション（ユーザー担当）
- 写真スライダーの仕様
- Headerの固定・表示変化
- アニメーションと `prefers-reduced-motion` 対応
