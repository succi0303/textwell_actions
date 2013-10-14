// Cal2Todoで予定を登録する
// 1行目をタイトル、2行目以降をノートとする
var title = encodeURIComponent(T.line(1));
var notes = encodeURIComponent(T.lines(2, null));
T( 'urlScheme', {
  url: 'cal2todo://?title=' + title +
    ',notes=' + notes +
    ',callback=textwell://',
  option: 'clearAll'
});
