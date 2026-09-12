/* =======================================
 * こうの湯 英語版 環境設定
 * URL: /src/lib/env.ts
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

export const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://en.kounoyu.jp/')
  : null;
