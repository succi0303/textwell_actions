// Opens YouTube.com and search text of the current line or selection.
T( 'urlScheme', {
  url: 'http://youtube.com/results?q=' + encodeURIComponent( T.current ),
  option: 'none'
});
