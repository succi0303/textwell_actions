// Opens Google.com and execute "I'm Feeling Lucky" so that
// it takes you to the first search result automatically.
// This acts like semantic searching or direct answering.
T( 'urlScheme', {
  url: 'https://www.google.com/search?q=' + T.current + '&btnI='
});
