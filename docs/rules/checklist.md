# 案件固有チェックリスト

共通確認はReact / Next.jsプレイブックの `workflow.md`、`nextjs-static-export.md`、`review.md` を参照します。

## セットアップ後

- [x] `package.json` とlockfileでNext.js / Reactの実バージョンを確認した
- [x] `next.config.ts` に `output: 'export'` がある
- [x] サブドメイン直下公開として `basePath` を設定していない
- [x] `assetPrefix`は設定せず、`trailingSlash: true`にした
- [x] `next/image` は `images.unoptimized: true` で静的書き出しする
- [ ] サーバー側で必要なリダイレクトとヘッダーを整理した

## Next.js 16

- [ ] ページやレイアウトの `params` / `searchParams` をPromiseとして扱っている
- [ ] `generateStaticParams()` が必要な動的ルートをすべて列挙している
- [ ] `generateMetadata()` / `generateStaticParams()`を、asyncという理由だけで禁止していない
- [ ] `force-dynamic`など、静的書き出しと競合する実行時機能を使っていない
- [ ] `useSearchParams()`を使うClient Componentに必要な `Suspense` 境界がある
- [x] `next lint` ではなく、ESLint CLIを使っている

## 英語版SEO

- [x] `<html lang="en">` になっている
- [ ] canonical、OGP、sitemapが `https://en.kounoyu.jp/` を基準にしている
- [ ] デモURLをcanonicalやOGP URLとして出力していない
- [ ] 日本語版との `hreflang` 方針を確認した
- [ ] デモ環境がnoindexになっている
- [ ] 旧英語サイトから変更するURLのリダイレクトを整理した

## データ連携

- [ ] 英語版が `public/db/` を利用するか確認した
- [ ] 管理画面が更新するJSONと、英語版が参照するJSONの責務を確認した
- [ ] ビルド後更新が必要なデータを、ビルド時のHTMLへ固定していない
- [ ] 読み込み中、空データ、取得失敗時の表示を用意した

## 確認コマンド

- TypeScript、ESLint、Prettier、Stylelintなど、ビルドを伴わない確認を優先する
- ビルドの実行者とタイミングは共通プレイブックの方針に従う
