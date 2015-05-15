System.register(['questions/playerstats'], function (_export) {
  var Playerstats_Question, _classCallCheck, _get, _inherits, Most_Assists_Question;

  return {
    setters: [function (_questionsPlayerstats) {
      Playerstats_Question = _questionsPlayerstats.Playerstats_Question;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      Most_Assists_Question = (function (_Playerstats_Question) {
        function Most_Assists_Question(http) {
          _classCallCheck(this, Most_Assists_Question);

          _get(Object.getPrototypeOf(Most_Assists_Question.prototype), 'constructor', this).call(this, http, 'A');
          this.heading = 'Who got most assists during the 14/15 SHL regular season for Modo?';
        }

        _inherits(Most_Assists_Question, _Playerstats_Question);

        return Most_Assists_Question;
      })(Playerstats_Question);

      _export('Most_Assists_Question', Most_Assists_Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy9tb3N0X2Fzc2lzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs4REFFYSxxQkFBcUI7Ozs7bURBRjFCLG9CQUFvQjs7Ozs7Ozs7Ozs7QUFFZiwyQkFBcUI7QUFDckIsaUJBREEscUJBQXFCLENBQ3BCLElBQUksRUFBRTtnQ0FEUCxxQkFBcUI7O0FBRTlCLHFDQUZTLHFCQUFxQiw2Q0FFeEIsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNqQixjQUFJLENBQUMsT0FBTyxHQUFHLG9FQUFvRSxDQUFDO1NBQ3JGOztrQkFKVSxxQkFBcUI7O2VBQXJCLHFCQUFxQjtTQUFTLG9CQUFvQjs7dUNBQWxELHFCQUFxQiIsImZpbGUiOiJxdWVzdGlvbnMvbW9zdF9hc3Npc3RzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=