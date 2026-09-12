# 英語版LP ページ構成

## プロジェクト範囲

旅館こうの湯公式サイトの英語版を、1ページ完結の縦長LPとして制作します。

- App Router上のページ: `/`
- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 公開URL: `https://en.kounoyu.jp/`
- ページ数: 1ページ
- 構成: ページ内セクションへのアンカー移動を基本とする
- 現行英語サイト: `https://www.kounoyu.jp/en/`
- 日本語版サイト: `https://www.kounoyu.jp/`

デモ・本番ともサブドメインのルート `/` で公開します。特別なサーバー要件がない限り、Next.jsの `basePath` は設定しません。

## デザイン参照元

- PCデザイン: `docs/screenshot/こうの湯_PC_English LP.jpg`
- 画像サイズ: 1366 × 28373px
- SPデザイン: 未配置

実装時は上記PCデザインを正とし、文章量、画像比率、余白、セクション順を独自判断で簡略化しません。

構築段階の実装対象はPCのみです。スマートフォンのレスポンシブ調整はユーザーが行うため、CodexはPCデザインからSP仕様を推測せず、SP用のレイアウト、余白、文字サイズ、表示切り替え、メニュー仕様、media queryを追加・確定しません。

## ページ構成

セクション名は実装整理用です。画面上の正式見出しとアンカー名は、デザイン・原稿・ナビゲーションを照合して確定します。

|   # | セクション                | 主な内容                                                                 | 状態         |
| --: | ------------------------- | ------------------------------------------------------------------------ | ------------ |
|   1 | Header                    | ロゴ、ページ内ナビゲーション、予約導線                                   | 要詳細確認   |
|   2 | Hero                      | メインビジュアル、施設名、ファーストビューの訴求                         | デザインあり |
|   3 | Introduction              | こうの湯の紹介、基本情報、滞在時の案内                                   | デザインあり |
|   4 | Rooms                     | 客室概要、平屋タイプ、メゾネットタイプ、離れ特別室、間取り、客室露天風呂 | デザインあり |
|   5 | Onsen                     | 客室風呂、貸切露天風呂、男女別露天風呂、立ち湯、足湯、利用案内           | デザインあり |
|   6 | Meals                     | 料理紹介、夕食、朝食、飲み物、食事処                                     | デザインあり |
|   7 | Your Stay                 | 館内マップ、売店、入湯手形、周辺スポット                                 | デザインあり |
|   8 | Access                    | 地図、所在地、飛行機、車、公共交通機関によるアクセス                     | デザインあり |
|   9 | Reservation / Information | 予約導線、宿泊時の補足情報                                               | 要詳細確認   |
|  10 | Footer                    | 施設情報、補助リンク、予約導線                                           | 要詳細確認   |

## ナビゲーション

複数ページへの遷移ではなく、原則としてLP内の対象セクションへ移動します。

想定アンカー:

- `#introduction`
- `#rooms`
- `#onsen`
- `#meals`
- `#stay`
- `#access`

アンカー名は、Headerの正式な英語表記と揃えてから確定します。

外部予約サイト、Google Maps、周辺施設などへのリンクは外部リンクとして扱い、遷移先URLを実装前に確認します。

## セクション詳細

### Header

- 英語版ロゴまたは施設ロゴ
- LP内ナビゲーション
- 予約CTA
- 構築段階はPC表示のみを実装する
- SPでの表示方式はユーザー調整のためCodexは確定しない
- スクロール時の固定・背景変化の有無

### Hero

- メインビジュアル
- 施設名・ブランド表記
- キャッチコピー
- 必要に応じて予約導線

Hero内の見出しをページの `h1` とするか、ロゴ表示と別にテキスト見出しを用意するか確認します。

### Introduction

- 旅館こうの湯の特徴
- 客室露天風呂などの主要訴求
- 基本情報
- 日本旅館での滞在方法や文化的な案内

現行英語サイトの情報を参照する場合も、そのまま転載せず、新デザインの確定原稿を優先します。

### Rooms

- 客室全体の紹介
- One-Story Room
- Maisonette Room
- Private Detached Suite
- 客室写真
- 客室露天風呂写真
- 間取り
- 定員・設備などの客室情報

客室名の正式な英語表記は、予約サイトと実際の販売名称を照合して統一します。

### Onsen

- 温泉全体の紹介
- Private In-Room Onsen
- Private Open-Air Bath
- Public Open-Air Bath
- Standing Bath
- Footbath
- 営業時間、宿泊者限定などの利用条件

温泉名、日本固有の入浴ルール、男女別表記は、英語利用者に誤解がない表現を確認します。

### Meals

- 食事全体の紹介
- Dinner
- Breakfast
- Sake / Shochu
- Restaurant

料理名・食材名・アレルギー対応など、意味が変わる可能性のある翻訳は確定原稿を使用します。

### Your Stay

- Kono-Yu Property Map
- Souvenir Shop
- Onsen Ticket / Nyuto Tegata
- Kurokawa Onsen周辺の案内
- 周辺施設のWebサイト・Google Mapsへのリンク

周辺施設の営業時間、料金、距離などは更新される可能性があるため、公開前に確認します。

### Access

- Google Map
- 住所
- By Air
- By Car
- By Public Transportation
- 各地域からの経路図
- 外部交通機関へのリンク

所要時間、路線名、交通機関のURLは、デザイン内の情報だけで確定せず公開前に確認します。

### Reservation / Information

- 外部予約サイトへの導線
- 宿泊・予約に関する補足
- 必要に応じて問い合わせ先

予約URL、対応言語、別タブ遷移の有無を確認します。

### Footer

- 施設名
- 住所・電話番号
- 主要アンカー
- 予約導線
- 日本語サイトへのリンク
- 必要な法務・プライバシー関連リンク

## コンポーネント構成案

`page.tsx`はセクションを並べる役割に留め、各セクションを分割します。

```text
src/app/page.tsx

src/components/common/
├── ExternalLink.tsx
├── ScrollLink.tsx
├── Header.tsx
├── Header.module.scss
├── Footer.tsx
└── Footer.module.scss

src/components/top/
├── TopHero.tsx
├── TopHero.module.scss
├── TopIntro.tsx
├── TopIntro.module.scss
├── TopWelcomeSlider.tsx
├── TopWelcomeSlider.module.scss
├── TopRooms.tsx
├── TopRooms.module.scss
├── TopOnsen.tsx
├── TopOnsen.module.scss
├── TopMeals.tsx
├── TopMeals.module.scss
├── TopStay.tsx
├── TopStay.module.scss
├── TopAccess.tsx
├── TopAccess.module.scss
├── TopInformation.tsx
├── TopInformation.module.scss
├── TopReservation.tsx
└── TopReservation.module.scss
```

コンポーネント名と分割単位は実装開始時に既存構成を確認して確定します。デザイン内の小要素を、最初から細かくComponent化しすぎません。

## SEO上のページ構造

- SEO対象ページは原則としてLPの1ページのみ
- `h1` はページ全体で1つを基本とする
- Rooms、Onsen、Meals、Your Stay、Accessなどの主要セクションは `h2` を基本とする
- セクション内の客室タイプや温泉種別は `h3` 以下で整理する
- ページ内アンカーを個別ページとしてsitemapへ登録しない
- title、description、canonical、OGPは英語版LP用に設定する
- 日本語版との `hreflang` を確認する

詳細は `docs/seo/SEO_SETUP.md` で管理します。

## 実装前の確認事項

- 正式な英語施設名表記
- Headerナビゲーションの正式ラベルとアンカー
- Heroの `h1` とキャッチコピー
- 各セクションの確定原稿
- 画像素材の実ファイルと使用範囲
- 写真スライダーの有無と操作仕様
- SPデザインまたはSP時の優先順位（ユーザー調整のためCodexの構築範囲外）
- 予約サイトの正式URL
- Google Mapsと周辺施設のリンク
- 交通情報、営業時間、料金などの最新情報
- 日本語版と英語版の切り替え導線
- デモ・本番サーバーへの配置方法

## 現時点で対象外

- `/about/`、`/stay/`、`/cuisine/`などの独立した下層ページ
- お知らせ一覧・詳細ページ
- CMSや管理画面の新規設計
- デザインにないページの追加

将来、下層ページを追加する場合は、このLP構成と分けてページ一覧を追記します。
