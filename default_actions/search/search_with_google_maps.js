// Opens Google Maps app and searches text of the current line or selection.
T( 'urlScheme', {
  url: 'comgooglemaps://?q=' + encodeURIComponent( T.current ),
  option: 'none'
});
