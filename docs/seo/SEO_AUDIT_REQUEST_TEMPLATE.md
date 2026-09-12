# 英語版LP SEOレビュー依頼テンプレート

最初に `AGENTS.md`、`docs/PAGE_STRUCTURE.md`、`docs/seo/SEO_SETUP.md` を確認してください。

## 依頼内容

旅館こうの湯英語版LPについて、実装と案件Markdownを照合し、SEOレビューをしてください。

## 前提

- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 公開URL: `https://en.kounoyu.jp/`
- Next.js App Router
- 静的書き出し
- 1ページ完結の英語LP
- 一般論ではなく、実装済みコードを根拠に判断する
- ページ構成やデザインの大幅変更を前提にしない

## 確認対象

- LP `/`
- `src/app/layout.tsx`
- metadata関連ファイル
- `robots.ts`
- `sitemap.ts`
- 構造化データ
- Header、Footer、主要セクション
- 画像と外部リンク

## 優先して確認する内容

1. `<html lang="en">`と英語locale
2. title、description、canonical
3. 日本語版とのhreflang
4. robots、sitemap、デモ環境のnoindex
5. h1からh3の見出し構造
6. 施設名・地名・客室名・温泉名の表記統一
7. 画像altとOGP画像
8. `LodgingBusiness` / `Hotel`などの構造化データ
9. 予約、Google Maps、交通機関、周辺施設の外部リンク
10. 静的書き出しとSEO実装の整合
11. Markdownと実装の矛盾

## 指摘ごとの必須項目

- ID
- 優先度: 高 / 中 / 低
- 対象ファイルと行番号
- 問題の内容
- 実際の影響
- 確認方法
- 最小修正案
- 仕様確認の要否

## 保存

- 外部レビュー原文は `docs/review/EXTERNAL_REVIEW_ツール名_YYYY-MM-DD.md` に保存する
- 同名ファイルがある場合は `_02`、`_03` のように連番を付ける
- マシン固有の絶対パスを記載しない
- 対応状況は共通プレイブックのレビュー形式で管理する
