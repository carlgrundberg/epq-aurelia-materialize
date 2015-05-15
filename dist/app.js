System.register(['aurelia-framework', 'aurelia-router', 'materialize'], function (_export) {
  var inject, Router, _classCallCheck, App;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_materialize) {}],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      App = (function () {
        function App(router) {
          _classCallCheck(this, _App);

          this.pageTitle = 'EP Quiz';

          this.router = router;
          this.router.configure(function (config) {
            config.title = 'EP Quiz';
            config.map([{ route: [''], moduleId: './quiz', title: 'Quiz' }]);
          });
        }

        var _App = App;
        App = inject(Router)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VDQUthLEdBQUc7Ozs7aUNBTFIsTUFBTTs7OEJBQ04sTUFBTTs7Ozs7OztBQUlELFNBQUc7QUFHSCxpQkFIQSxHQUFHLENBR0YsTUFBTSxFQUFFOzs7ZUFGcEIsU0FBUyxHQUFHLFNBQVM7O0FBR25CLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUcsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFFLENBQ25ELENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzttQkFYVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9