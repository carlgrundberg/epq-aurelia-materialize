import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'materialize';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'EP Quiz';
      config.map([
        { route: [''],  moduleId: './question', title:'Question' }
      ]);
    });
  }
}
