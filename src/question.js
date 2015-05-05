import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery'

@inject(HttpClient)
export class Question{
  heading = 'Vem gjorde flest poäng för Modo säsongen 14/15 i SHL?';
  options = [];
  url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=(season.startYear=2014%26gameType=REGULAR_SEASON)';
  correctAnswer = -1;

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(xhr => {
      var res = JSON.parse(xhr.response);
      var data = res.data;
      var options = [];
      var max = -1;

      while(options.length < 4) {
        var r = Math.floor(Math.random()*data.length);
        var player = data[r];
        if(player.TP && player.TP != max) {
          delete data[r];
          options.push({
            id: player.player.id,
            title: player.player.firstName + ' ' + player.player.lastName,
            value: player.TP,
            image: player.player.imageUrl ? 'http://files.eliteprospects.com/layout/players/' + player.player.imageUrl : 'http://i.imgur.com/hfH9CiC.png',
            correct: false
          });
          if(max < player.TP) {
            max = player.TP;
            this.correctAnswer = options.length -1;
          }
        }
      }

      options[this.correctAnswer].correct = true;

      this.options = options;
    });
  }

  answer(e, option) {
    e.preventDefault();
    $('.card-image img').click();
  }
}

