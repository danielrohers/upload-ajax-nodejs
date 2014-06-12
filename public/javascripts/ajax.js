;(function (w, d, undefined) {

  'use strict';

  var ajax = (function () {

    var exports = {};

    var _send = function (type, url, data) {
      var methods = {
        success : function () {}
      }

      var req = new XMLHttpRequest();
      req.open(type, url, true);

      req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
          methods.success(_parse(req));
        }
      };

      req.send(data);

      return {
        success : function (callback) {
          methods.success = callback;
        }
      };
    };

    var _post = function (url, data, callback) {
      return _send('POST', url, data);
    };

    var _parse = function (req) {
      var result;
      try {
        result = JSON.parse(req.responseText);
      } catch (e) {
        result = req.responseText;
      }
      return result;
    };

    var _serialize = function (data) {
      var formData = new FormData();
      util.each(data, function (element) {
        var name = element.name
        if (element.type === 'file') {
          util.each(element.files, function (file) {
            formData.append(name, file, file.name);
          });
        } else {
          formData.append(name, element.value);
        }
      });
      return formData;
    };

    exports.post = _post;

    exports.serialize = _serialize;

    return exports;

  })();

  w.ajax = ajax;

})(window, document);