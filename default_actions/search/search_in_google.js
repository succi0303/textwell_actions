// Opens Google.com and search text of the current line or selection.
T( 'urlScheme', {
  url: 'http://www.google.com/search?q=' + encodeURIComponent( T.current ),
  option: 'none'
});
