// 特定の相手にGmailでメールを送る
// 1行目をSubject、2行目以降を本文とする

// toに送信したい相手のメールアドレスを設定します。
// 複数の相手を指定したい場合は','で繋げてください。

var subject = T.line(1);
var body = T.lines(2, null);
var to = 'foo@sample.com,bar@sample.com';

T( 'urlScheme', {
  url: 'googlegmail:///co?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body) + '&to=' + encodeURIComponent(to),
  option: 'clearAll'
});
