// Inserts "(" and ")" to the current caret position, then the caret will be set between two characters.
// Like "insert Hello" action, this is a template for making custom Action that inserts two set of text strings 
// by sandwiching the caret or currently selected text.
T( 'replaceRange', {
  replaceRange: T.range,
  text: '(' + T.selectedText + ')',
  selectingRange: {
    loc: T.range.loc + 1,
    len: T.range.len
  }
});
