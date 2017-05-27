define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var makeDom = require("domutils/test/utils").makeDom;
var markup = Array(21).join(
	"<?xml><tag1 id='asdf'> <script>text</script> <!-- comment --> <tag2> text </tag1>"
);

module.exports = makeDom(markup);

return module.exports;});
