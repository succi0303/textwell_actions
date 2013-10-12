// This is just a variation of "insert ( and )" which helps writing HTML markup.
T( 'replaceRange', {
  replacingRange: T.range,
  text: '<>' + T.selectedText + '</>,
  selectingRange: {
    loc: T.range.loc + 2
    len: T.range.len
  }
});
