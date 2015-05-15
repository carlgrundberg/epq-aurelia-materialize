System.register(['questions/most_goals', 'questions/most_assists', 'questions/most_points', 'jquery', 'aurelia-framework', 'aurelia-http-client'], function (_export) {
  var Most_Goals_Question, Most_Assists_Question, Most_Points_Question, $, inject, HttpClient, _classCallCheck, _createClass, Quiz;

  return {
    setters: [function (_questionsMost_goals) {
      Most_Goals_Question = _questionsMost_goals.Most_Goals_Question;
    }, function (_questionsMost_assists) {
      Most_Assists_Question = _questionsMost_assists.Most_Assists_Question;
    }, function (_questionsMost_points) {
      Most_Points_Question = _questionsMost_points.Most_Points_Question;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Quiz = (function () {
        function Quiz(http) {
          _classCallCheck(this, _Quiz);

          this.showResult = false;
          this.isCorrect = false;
          this.isWrong = false;
          this.i = 1;
          this.questions = [Most_Goals_Question, Most_Assists_Question, Most_Points_Question];
          this.question = null;

          this.http = http;
        }

        var _Quiz = Quiz;

        _createClass(_Quiz, [{
          key: 'activate',
          value: function activate() {
            this.next();
          }
        }, {
          key: 'answer',
          value: function answer(e, option) {
            if (this.showResult) {
              return;
            }

            e.stopPropagation();
            this.showResult = true;
            if (option.correct) {
              this.isCorrect = true;
            } else {
              this.isWrong = true;
            }

            $('.card-image img').click();
          }
        }, {
          key: 'next',
          value: function next() {
            this.isCorrect = false;
            this.isWrong = false;
            this.showResult = false;
            this.i++;

            this.question = new (this.questions[Math.floor(Math.random() * this.questions.length)])(this.http);
            this.question.generate();
          }
        }, {
          key: 'progress',
          get: function () {
            return Math.round(this.i / 10 * 100);
          }
        }]);

        Quiz = inject(HttpClient)(Quiz) || Quiz;
        return Quiz;
      })();

      _export('Quiz', Quiz);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs4SEFRYSxJQUFJOzs7O2lEQVJULG1CQUFtQjs7cURBQ25CLHFCQUFxQjs7bURBQ3JCLG9CQUFvQjs7OztpQ0FFcEIsTUFBTTs7c0NBQ04sVUFBVTs7Ozs7Ozs7O0FBR0wsVUFBSTtBQVFKLGlCQVJBLElBQUksQ0FRSCxJQUFJLEVBQUM7OztlQVBqQixVQUFVLEdBQUcsS0FBSztlQUNsQixTQUFTLEdBQUcsS0FBSztlQUNqQixPQUFPLEdBQUcsS0FBSztlQUNmLENBQUMsR0FBRyxDQUFDO2VBQ0wsU0FBUyxHQUFHLENBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLENBQUU7ZUFDaEYsUUFBUSxHQUFHLElBQUk7O0FBR2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O29CQVZVLElBQUk7Ozs7aUJBWVAsb0JBQUU7QUFDUixnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ2I7OztpQkFFSyxnQkFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFO0FBQ2hCLGdCQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbEIscUJBQU87YUFDUjs7QUFFRCxhQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDakIsa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCLE1BQU07QUFDTCxrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7O0FBRUQsYUFBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDOUI7OztpQkFFRyxnQkFBRztBQUNMLGdCQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGdCQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7O0FBR1QsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0YsZ0JBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7V0FDMUI7OztlQUdXLFlBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1dBQ3RDOzs7QUE5Q1UsWUFBSSxHQURoQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJxdWl6LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=