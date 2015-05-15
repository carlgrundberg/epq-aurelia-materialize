System.register([], function (_export) {
  var _classCallCheck, _createClass, Question;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Question = (function () {
        function Question(http) {
          _classCallCheck(this, Question);

          this.heading = '';
          this.options = [];
          this.url = '';

          this.http = http;
        }

        _createClass(Question, [{
          key: 'generate',
          value: function generate() {}
        }]);

        return Question;
      })();

      _export('Question', Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy9xdWVzdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLFFBQVE7Ozs7Ozs7Ozs7O0FBQVIsY0FBUTtBQUtSLGlCQUxBLFFBQVEsQ0FLUCxJQUFJLEVBQUU7Z0NBTFAsUUFBUTs7ZUFDbkIsT0FBTyxHQUFHLEVBQUU7ZUFDWixPQUFPLEdBQUcsRUFBRTtlQUNaLEdBQUcsR0FBRyxFQUFFOztBQUdOLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFQVSxRQUFROztpQkFTWCxvQkFBRyxFQUFFOzs7ZUFURixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJxdWVzdGlvbnMvcXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==