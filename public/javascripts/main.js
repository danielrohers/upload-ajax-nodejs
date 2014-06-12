;(function (w, d, undefined) {

  'use strict';

  var main = (function () {

    var exports = {};

    var _submit = function () {

      d.querySelector('.submit').addEventListener('click', function (e) {

        e.preventDefault();

        var data = ajax.serialize(d.forms[0].querySelectorAll('input'));

        ajax.post('/upload', data, _resolveResult);

      });

    };

    var _resolveResult = function (data) {
      if (data instanceof Array) {
          util.each(data, function (file) {
            _populateFile(file);
          });
        } else {
          _populateFile(data);
        }
    };

    var _populateFile = function (file) {
      var ul = d.querySelector('.result ul');
      var li = d.createElement('li');
      li.innerHTML = file.name;
      ul.appendChild(li);
    };

    exports.init = function () {
      _submit();
    };

    return exports;

  })();

  main.init();

})(window, document);