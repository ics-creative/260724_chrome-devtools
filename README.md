# Chrome DevTools for agents 記事用デモ

## デモ一覧と各ファイル

ルートの[index.html](https://ics-creative.github.io/260724_chrome-devtools/)をブラウザで開くと、すべてのデモへ移動できます。

| デモ | 修正前 | 修正後 |
| --- | --- | --- |
| 1. PC向けカードレイアウト | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/01/before/index.html) | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/01/after/index.html) |
| 2. フォームの実装 | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/02/before/index.html) | [ページを開く](https://ics-creative.github.io/260724_chrome-devtools/demo/02/after/index.html) |

## AIエージェントへ渡すプロンプト

### デモ1：PC向けカードレイアウト

> Chrome DevTools MCPを使って、現在開いているイベント申し込みページを確認してください。3つの参加プランの各カードはsubgridで各要素の高さを揃え、カードの幅が320pxを下回る場合は折り返すようにしてください。基本的には3枚横並びです。既存の配色やデザインは維持してください。修正後はページを再読み込みし、幅1280pxと幅375pxで表示を確認してください。横並びのカードのボタンの位置が合っていない、横スクロールが発生している場合は再度修正してください。

### デモ2：フォームの実装

> Chrome DevTools MCPを使って、現在開いているイベント申し込みページを確認し、申し込みフォームに入力チェックを実装してください。名前とメールアドレスを必須とし、未入力で送信した場合は各入力欄の近くにエラーメッセージを表示してください。正しく入力された場合はフォームの上部に、申し込み完了メッセージを表示してください。実際のサーバー通信やページ遷移は必要ありません。実装後はページを再読み込みし、未入力のまま送信した場合と、名前山田 太郎、メールアドレスtaro@example.comを入力して送信した場合の両方をChrome上で操作して確認してください。コンソールエラーが発生していたら修正してください。
