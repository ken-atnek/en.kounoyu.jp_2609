# SCSSコメントヘッダー運用ルール

## 目的

`scss` / `module.scss` ファイルの先頭に、用途・参照元・更新日が分かるコメントを統一して記載する。

## 対象

- `src/**/*.scss`
- `src/**/*.module.scss`

## 記載ルール

- `module.scss` を新規作成する時は、必要に応じて先頭に `@use` を記載する
- コメントヘッダーは `@use` の後に記載する
- `URL` はプロジェクトルートからの絶対パス風で書く
- `Referenced in` は対応するTSXや読み込み元を書く
- インデントはスペース4で統一する
- 修正したら `Last updated` を更新する
- タイトルは「こうの湯 英語版 + コンポーネント名 + スタイル」で簡潔に書く
- 日付は `YYYY-MM-DD` で統一する

## テンプレート

```scss
@use '../../styles/foundation/' as *;
/* =======================================
 * こうの湯 英語版 Header スタイル
 * URL: /src/components/common/Header.module.scss
 * Referenced in: /src/components/common/Header.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */
```
