// Unescapes HTML special characters within whole or selected text.
var text = T.whole;
var e = document.createElement( 'DIV' );
e.innerHTML = text;
var result = e.childNodes.length === 0 ? '' : e.childNodes[ 0 ].nodeValue;
T( 'replaceWhole', {
  text: result
});
