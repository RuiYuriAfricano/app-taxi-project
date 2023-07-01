define(function () {
  "use strict";

  // rtagName captures the name from the first start tag in a string of HTML
  // https://html.spec.whatwg.org/multipage/syntax.php#tag-open-state
  // https://html.spec.whatwg.org/multipage/syntax.php#tag-name-state
  return /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
});
