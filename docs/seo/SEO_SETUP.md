# 英語版LP SEO設計

このファイルでは、旅館こうの湯英語版LPのSEO固有情報を管理します。

Next.jsの一般的なmetadata、robots、sitemap、静的書き出しの仕様はReact / Next.js共通プレイブックを参照します。

## サイト基本情報

- 案件: 旅館こうの湯 英語版LPリニューアル
- 現行英語サイト: `https://www.kounoyu.jp/en/`
- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 公開URL: `https://en.kounoyu.jp/`
- 日本語サイト: `https://www.kounoyu.jp/`
- 対象ページ: 1ページ
- 言語: 英語
- locale候補: `en_US`または実際の対象地域に合わせて確定

## 正式表記の確認

現在の資料内で `Kono-Yu`、`Kounoyu`、`Ryokan Kono-Yu`などの表記が混在しています。

公開前に次を確定します。

- 英語の正式施設名
- ロゴ内の表記
- title、description、構造化データで使う名称
- 客室タイプ名
- 温泉名
- `Kurokawa Onsen`などの地名表記

確定後は、デザイン、本文、alt、metadata、外部予約サイトの表記を可能な範囲で統一します。

## ページメタ情報

### 英語版LP `/`

- 公開URL: `https://en.kounoyu.jp/`
- title: 未確定
- description: 未確定
- canonical: `https://en.kounoyu.jp/`
- og:title: 未確定
- og:description: 未確定
- og:image: 未確定
- og:locale: 未確定
- robots: 本番はindex、デモはnoindex

titleとdescriptionは、確定原稿と正式な施設名を確認してから作成します。

## 見出し構造

- `h1` はLP全体で1つを基本とする
- Heroの施設名または主要コピーを `h1` にするか確認する
- Introduction、Rooms、Onsen、Meals、Your Stay、Accessは `h2` を基本とする
- 客室タイプ、温泉種別、交通手段などは `h3` 以下で整理する
- 見た目だけを理由に見出しレベルを飛ばさない

## canonical / hreflang

- 英語版canonicalは `https://en.kounoyu.jp/` を基準にする
- 日本語版との対応関係を確認し、必要な `hreflang` を設定する
- `x-default` の遷移先は日本語版・英語版の運用方針を確認して決める
- デモURLをcanonicalやOGP URLとして出力しない
- ページ内アンカーは個別canonicalを持たない

## robots / sitemap

- 本番のsitemapには英語版LPの正式URLを登録する
- ページ内アンカーはsitemapへ登録しない
- デモ環境はnoindex、nofollowを基本とする
- デモ環境のrobotsはクロールを許可しない構成を基本とする
- `robots.ts` / `sitemap.ts` に `force-static` を一律必須としない
- 日本語版sitemapと英語版sitemapを分けるか統合するか、既存サイト運用を確認する

## 構造化データ

導入候補:

- `LodgingBusiness`
- `Hotel`
- `PostalAddress`
- `BreadcrumbList`は1ページLPでは必要性を確認する

施設名、住所、電話番号、画像、予約URLなど、確定した情報だけを出力します。

## 画像SEO

- 意味のある施設・客室・温泉・料理画像には内容が分かる英語altを設定する
- 装飾画像は空altを検討する
- OGP画像は英語版として使用できる画像を指定する
- スライダー画像のaltを同じ文言で機械的に重複させない
- 画像ファイル名と公開パスを実装後に確認する

## 外部リンク

公開前に次の遷移先と有効性を確認します。

- 予約サイト
- Google Maps
- Kurokawa Onsen関連サイト
- 周辺施設
- 交通機関・時刻表
- 日本語サイト

## リニューアル時の確認

- 現行英語URLを維持できるか
- 旧ページ内リンクや外部サイトからのリンクに影響がないか
- URLを変更する場合のサーバー側リダイレクト
- 現行英語サイトのtitle、description、検索結果
- 日本語版との重複判定を避けるlanguage / canonical設計

## デモ・本番切り替え

- デモURL: `https://en-demo-kounoyu-jp.tuna-pic.co.jp/`
- 本番URL: `https://en.kounoyu.jp/`
- 環境変数名: 未確定
- デモはnoindex
- 本番時だけ正式なcanonical、OGP URL、計測タグを有効にする

実装方法は共通プレイブックを参照し、確定した環境変数名とbuild scriptsだけを `docs/rules/project-setup.md`へ記録します。

## 公開前チェック

- 正式な施設名表記が統一されている
- titleとdescriptionが英語で設定されている
- `<html lang="en">` が設定されている
- canonicalが `https://en.kounoyu.jp/` になっている
- hreflangの対応先が正しい
- OGP画像とURLが本番環境で表示できる
- robotsとsitemapがデモ・本番で正しく切り替わる
- h1からh3の見出し階層が自然
- 主要画像に適切な英語altがある
- 構造化データが確定情報と一致している
- 外部リンクが有効
- 交通時間、料金、営業時間などが最新
