System.register(['questions/playerstats'], function (_export) {
  var Playerstats_Question, _classCallCheck, _get, _inherits, Most_Goals_Question;

  return {
    setters: [function (_questionsPlayerstats) {
      Playerstats_Question = _questionsPlayerstats.Playerstats_Question;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      Most_Goals_Question = (function (_Playerstats_Question) {
        function Most_Goals_Question(http) {
          _classCallCheck(this, Most_Goals_Question);

          _get(Object.getPrototypeOf(Most_Goals_Question.prototype), 'constructor', this).call(this, http, 'G');
          this.heading = 'Who scored the most goals during the 14/15 SHL regular season for Modo?';
        }

        _inherits(Most_Goals_Question, _Playerstats_Question);

        return Most_Goals_Question;
      })(Playerstats_Question);

      _export('Most_Goals_Question', Most_Goals_Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy9tb3N0X2dvYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OERBRWEsbUJBQW1COzs7O21EQUZ4QixvQkFBb0I7Ozs7Ozs7Ozs7O0FBRWYseUJBQW1CO0FBQ25CLGlCQURBLG1CQUFtQixDQUNsQixJQUFJLEVBQUU7Z0NBRFAsbUJBQW1COztBQUU1QixxQ0FGUyxtQkFBbUIsNkNBRXRCLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDakIsY0FBSSxDQUFDLE9BQU8sR0FBRyx5RUFBeUUsQ0FBQztTQUMxRjs7a0JBSlUsbUJBQW1COztlQUFuQixtQkFBbUI7U0FBUyxvQkFBb0I7O3FDQUFoRCxtQkFBbUIiLCJmaWxlIjoicXVlc3Rpb25zL21vc3RfZ29hbHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==