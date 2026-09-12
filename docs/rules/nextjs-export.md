# 英語版サイトの静的書き出し方針

Next.jsの一般的な静的書き出し制約は、React / Next.js共通プレイブックの `nextjs-static-export.md` を正とします。

このファイルには英語版サイト固有の差分だけを残します。

## 現時点の方針

- Next.js 16.3系を基準にする
- App Routerを使用する
- `output: 'export'` を使用する
- デモURLは `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 公開URLは `https://en.kounoyu.jp/`
- デモ・本番ともサブドメインのルート `/` に配置する
- 実際のNext.js / Reactバージョンは、セットアップ後の `package.json` とlockfileを正とする

## セットアップ前に決めること

- 特別なサーバー要件がない限り `basePath` は設定しない
- `assetPrefix` が必要か公開サーバーで確認する
- `trailingSlash` の設定
- 画像を `images.unoptimized`、カスタムloader、事前最適化のどれで扱うか
- 404ページと旧英語URLからのリダイレクト方法
- デモ環境と本番環境のURL切り替え方法

## データ更新

英語版が `public/db/` のJSONを参照するかは未確定です。

採用する場合は、次を案件固有仕様として追記します。

- 管理画面が更新するファイル
- 日本語版と英語版で共有するデータ
- 英語専用データ
- ビルド後更新を反映する必要があるデータ
- キャッシュ制御
- 取得失敗時の表示

## SEO出力

- canonical、OGP、sitemapは英語版の正式URLを基準にする
- デモ環境ではnoindexにする
- 日本語版との `hreflang` を確認する
- `robots.ts` / `sitemap.ts` に `force-static` を一律必須としない
- 特定バージョンの回避策が必要になった場合は、エラー内容とバージョンを日付別レビューに記録する

## 公開サーバー側で確認すること

静的書き出しではNext.jsサーバー機能を使用できないため、次は公開サーバー側の仕様として整理します。

- 旧URLからのリダイレクト
- HTTPからHTTPSへの統一
- www有無の統一
- 英語サブドメインの404処理
- Cache-Controlなどのレスポンスヘッダー
- ビルド成果物の配置時に残すファイルと置き換えるファイル
