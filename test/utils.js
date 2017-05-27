define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var htmlparser = require("htmlparser2");

exports.makeDom = function(markup) {
	var handler = new htmlparser.DomHandler(),
		parser = new htmlparser.Parser(handler);
	parser.write(markup);
	parser.done();
	return handler.dom;
};

return module.exports;});
