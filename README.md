# Chrome DevTools for agents 記事用デモ

## デモ一覧と各ファイル

ルートの[index.html](https://ics-creative.github.io/260724_chrome-devtools/)をブラウザで開くと、すべてのデモへ移動できます。

| デモ | 修正前 | 修正後 |
| --- | --- | --- |
| 1. PC向けカードレイアウト | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/01/before/index.html) | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/01/after/index.html) |
| 2. フォームの実装 | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/02/before/index.html) | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/02/after/index.html) |

## AIエージェントへ渡すプロンプト

### デモ1：PC向けカードレイアウト

```
Chrome DevTools MCPを使用。
開いているイベント申し込みページを確認。

・3つの参加プランは、subgridでカード内の各要素の高さを揃えるように。
・カード幅が320px未満になる場合は折り返し。
・修正後は再読み込みし、幅1280pxと375pxで表示を確認。

キャプチャをとって崩れてる箇所があれば再度修正。
```

### デモ2：フォームの実装

```
Chrome DevTools MCPを使用。
開いているイベント申し込みページを確認。

実装
・申し込みフォームに入力チェックを実装。
・名前とメールアドレスを必須にし、未入力時はエラーを表示。
・正しく入力された場合は、画面右上に送信完了のトーストUIを表示。
・トーストUIは右からスライドインし、3秒後に右へスライドアウト。
・サーバー通信やページ遷移は不要。
・送信後はフォームの入力値を空にする。

テスト
・実装後、有効値と無効値の全パターンでフォームを送信。
・キャプチャとコンソールを確認し、表示崩れやエラーがあれば再度修正。
```
