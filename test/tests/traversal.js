define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var test = require("tape-compat");
var describe = test.describe;
var it = test.it;    
var makeDom = require("domutils/test/utils").makeDom;
var traversal = require("domutils/");
var assert = require("assert");

describe("traversal", function() {
  describe("hasAttrib", function() {
    var hasAttrib = traversal.hasAttrib;

    it("doesn't throw on text nodes", function() {
      var dom = makeDom("textnode");
      assert.doesNotThrow(function() {
        hasAttrib(dom[0], "some-attrib");
      });
    });

  });
});

return module.exports;});
