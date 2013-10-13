// Cal2Todoで予定を登録する
// 1行目をタイトル、2行目以降をノートとする
T( 'urlScheme', {
  url: 'cal2todo://?title=' + encodeURIComponent(T.line(1)) +
    ',notes=' + encodeURIComponent(T.lines(2, null)) +
    ',callback=textwell://',
  option: 'clearAll'
});
