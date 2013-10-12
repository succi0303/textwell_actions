// Dueにリマインダーを登録する
// 登録後、Textwellに戻る
T( 'urlScheme', {
  url: 'due://x-callback-url/add?title=' +
  encodeURIComponent(T.current) +
  '&seclater=3600' +
  '&x-source=Textwell' +
  '&x-success=textwell:',
  option: 'clearAll'
});
