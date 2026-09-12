# Claude Instructions

作業開始時は、次の順で確認してください。

1. `AGENTS.md`
2. React / Next.js共通プレイブック
3. `docs/PAGE_STRUCTURE.md`
4. 作業対象に関係する `docs/rules/` または `docs/seo/` のMarkdown
5. SCSSを触る場合はSass / CSS共通プレイブック

## 必須方針

- この案件は `https://en.kounoyu.jp/` で公開する1ページ完結の英語LP
- Next.js 16.3系、App Router、TypeScript、SCSS、静的書き出しを基準とする
- 一般的な実装ルールを案件側へ重複記載しない
- PCデザインを独自判断で簡略化しない
- SPデザインがない箇所を推測で確定しない
- 英語の施設名、客室名、温泉名、地名は正式表記を確認する
- 予約、交通、周辺施設などの外部情報は公開前に確認する
- 依頼範囲外の構成変更や全面リファクタを行わない
- 共有用Markdownにマシン固有の絶対パスを残さない
- レビュー結果は `docs/review/REVIEW_YYYY-MM-DD.md` へ記録する
