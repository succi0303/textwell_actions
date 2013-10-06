// Gmailでメールを送る
// 1行目をSubject、2行目以降を本文とする
var subject = T.line(1);
var body = T.lines(2, null);
T( 'urlScheme', {
  url: 'googlegmail:///co?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body),
  option: 'clearAll'
});
