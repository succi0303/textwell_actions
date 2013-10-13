// Opens Maps app and search text of the current line or selection.
T( 'urlScheme', {
  url: 'maps://search?q=' + encodeURIComponent( T.current ),
  option: 'none'
});
