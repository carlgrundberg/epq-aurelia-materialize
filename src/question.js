import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Question{
  heading = 'Vem gjorde flest poäng för Modo säsongen 14/15 i SHL?';
  options = [];
  url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=season.startYear=2014';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(xhr => {
      var res = JSON.parse(xhr.response);
      var data = res.data;
      var options = [];

      for(var i = 0; i < 4; i++) {
        var player = data[Math.floor(Math.random()*data.length)];
        options.push({
          id: i,
          title: player.player.firstName + ' ' + player.player.lastName,
          value: player.TP,
          image: player.player.imageUrl ? 'http://files.eliteprospects.com/layout/players/' + player.player.imageUrl : ''
        });
      }

      this.options = options;
    });
  }

  answer(option) {
    console.log(option);
  }
}

