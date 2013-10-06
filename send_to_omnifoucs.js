// OmniFoucsに新しいタスクを登録する
// 1行目をname、2行目以降をnoteとする
T( 'urlScheme', {
  url: 'omnifocus:///add?name=' + encodeURIComponent(T.line(1)) + '&note=' + encodeURIComponent(T.lines(2,null)),
  option: 'none'
});
