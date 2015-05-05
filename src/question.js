import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import $ from 'jquery'

@inject(HttpClient)
export class Question{
  heading = 'Who got the most points during the 14/15 regular season for Modo in the SHL?';
  options = [];
  url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=(season.startYear=2014%26gameType=REGULAR_SEASON)';
  correctAnswer = -1;
  resultClass = 'hide';
  isCorrect = false;
  isWrong = false;
  i = 1;

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
        if(player && player.TP && player.TP != max) {
          delete data[r];
          options.push({
            id: player.player.id,
            title: player.player.firstName + ' ' + player.player.lastName,
            value: player.TP,
            image: player.player.imageUrl ? 'http://files.eliteprospects.com/layout/players/' + player.player.imageUrl : 'https://s-media-cache-ak0.pinimg.com/236x/cb/07/c2/cb07c28b4df8752f44e10b935a65eb87.jpg',
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

    this.resultClass = '';
    if(option.correct) {
      this.isCorrect = true;
    } else {
      this.isWrong = true;
    }
  }

  next() {
    this.isCorrect = false;
    this.isWrong = false;
    this.resultClass = 'hide';
    this.i++;

    this.activate();
  }


  get progress() {
    return Math.round(i / 10 * 100);
  }
}

