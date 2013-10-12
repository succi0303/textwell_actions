// Escapes HTML special characters within the whole or selected text.
var text = T.whole;
var e = document.createElement( 'DIV' );
var t = document.createTextNode( text );
e.appendChild( t );
var result = e.innerHTML;
T( 'replaceWhole', {
  text: result
});
