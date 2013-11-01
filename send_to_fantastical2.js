// fantastical2にイベントを登録する
// 1行目をparse、2行目以降をnotesとして登録
// 登録完了後、Textwellにもどる
T( 'urlScheme', {
  url: 'fantastical2://x-callback-url/parse?sentence=' +
  encodeURIComponent(T.line(1)) +
  '&notes=' +
  encodeURIComponent(T.lines(2, null)) +
  '&x-source=Textwell' +
  '&x-success=textwell:',
  option: 'clearAll'
});
