System.register(['questions/question'], function (_export) {
  var Question, _classCallCheck, _createClass, _get, _inherits, Playerstats_Question;

  return {
    setters: [function (_questionsQuestion) {
      Question = _questionsQuestion.Question;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      Playerstats_Question = (function (_Question) {
        function Playerstats_Question(http, prop) {
          _classCallCheck(this, Playerstats_Question);

          _get(Object.getPrototypeOf(Playerstats_Question.prototype), 'constructor', this).call(this, http);
          this.prop = prop;
          this.url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=(season.startYear=2014%26gameType=REGULAR_SEASON)';
        }

        _inherits(Playerstats_Question, _Question);

        _createClass(Playerstats_Question, [{
          key: 'generate',
          value: function generate() {
            var _this = this;

            return this.http.get(this.url).then(function (xhr) {
              var res = JSON.parse(xhr.response);
              var data = res.data;
              var options = [];
              var max = -1;
              var correctAnswer = -1;

              while (options.length < 4) {
                var r = Math.floor(Math.random() * data.length);
                var player = data[r];
                if (player && player[_this.prop] && player[_this.prop] != max) {
                  delete data[r];
                  options.push({
                    id: player.player.id,
                    title: player.player.firstName + ' ' + player.player.lastName,
                    value: player[_this.prop],
                    image: player.player.imageUrl ? 'http://files.eliteprospects.com/layout/players/' + player.player.imageUrl : 'https://s-media-cache-ak0.pinimg.com/236x/cb/07/c2/cb07c28b4df8752f44e10b935a65eb87.jpg',
                    correct: false
                  });
                  if (max < player[_this.prop]) {
                    max = player[_this.prop];
                    correctAnswer = options.length - 1;
                  }
                }
              }

              options[correctAnswer].correct = true;

              _this.options = options;
            });
          }
        }]);

        return Playerstats_Question;
      })(Question);

      _export('Playerstats_Question', Playerstats_Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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