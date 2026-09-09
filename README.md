# Tailwind 学習用

Vite + Tailwind CSS v4 の最小構成。

## 使い方

```bash
npm run dev      # 開発サーバー起動 (http://localhost:5173)
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果を確認
```

## 構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ここのクラスを書き換えて試す |
| `src/style.css` | `@import "tailwindcss"` と `@theme` によるテーマ拡張 |
| `src/main.js` | CSS の読み込み + 動作確認用のJS |
| `vite.config.js` | `@tailwindcss/vite` プラグインの登録 |

## v4 でのポイント

- `tailwind.config.js` / `postcss.config.js` は **不要**。設定は CSS の `@theme` に書く。
- `@tailwind base/components/utilities` は廃止。`@import "tailwindcss";` の1行に統一。
- content の指定（スキャン対象）は不要。Vite プラグインが自動検出する。
