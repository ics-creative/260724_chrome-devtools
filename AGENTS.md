# コーディング規約

## CSS

- `button` 要素やリンク要素には、`margin` を直接指定しないでください。要素間の余白は、親要素の `gap` やレイアウト用のラッパーで調整してください。
- `margin` で余白を設ける場合は、`margin-bottom` または `margin-right` を使用してください。
- 横並びのレイアウトには、まず CSS Grid を使用してください。Grid での再現が難しい場合に Flexbox を検討してください。

## HTML

- 必須項目には `aria-required="true"` を指定してください。
