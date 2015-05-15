System.register(['questions/playerstats'], function (_export) {
  var Playerstats_Question, _classCallCheck, _get, _inherits, Most_Points_Question;

  return {
    setters: [function (_questionsPlayerstats) {
      Playerstats_Question = _questionsPlayerstats.Playerstats_Question;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      Most_Points_Question = (function (_Playerstats_Question) {
        function Most_Points_Question(http) {
          _classCallCheck(this, Most_Points_Question);

          _get(Object.getPrototypeOf(Most_Points_Question.prototype), 'constructor', this).call(this, http, 'TP');
          this.heading = 'Who got most points during the 14/15 SHL regular season for Modo?';
        }

        _inherits(Most_Points_Question, _Playerstats_Question);

        return Most_Points_Question;
      })(Playerstats_Question);

      _export('Most_Points_Question', Most_Points_Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy9tb3N0X3BvaW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzhEQUVhLG9CQUFvQjs7OzttREFGekIsb0JBQW9COzs7Ozs7Ozs7OztBQUVmLDBCQUFvQjtBQUNwQixpQkFEQSxvQkFBb0IsQ0FDbkIsSUFBSSxFQUFFO2dDQURQLG9CQUFvQjs7QUFFN0IscUNBRlMsb0JBQW9CLDZDQUV2QixJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2xCLGNBQUksQ0FBQyxPQUFPLEdBQUcsbUVBQW1FLENBQUM7U0FDcEY7O2tCQUpVLG9CQUFvQjs7ZUFBcEIsb0JBQW9CO1NBQVMsb0JBQW9COztzQ0FBakQsb0JBQW9CIiwiZmlsZSI6InF1ZXN0aW9ucy9tb3N0X3BvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9