;(function (w, d) {

  'use strict';

  var util = (function () {

    var exports = {};

    exports.each = function (array, callback) {
      for (var i = 0; i < array.length; i++) {
        callback(array[i]);
      }
    };

    return exports;

  })();

  w.util = util;

})(window, document);