import {Question} from 'questions/question';

export class Playerstats_Question extends Question {
  constructor(http, prop) {
    super(http);
    this.prop = prop;
    this.url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=(season.startYear=2014%26gameType=REGULAR_SEASON)';
  }

  generate(){
    return this.http.get(this.url).then(xhr => {
      var res = JSON.parse(xhr.response);
      var data = res.data;
      var options = [];
      var max = -1;
      var correctAnswer = -1;

      while(options.length < 4) {
        var r = Math.floor(Math.random()*data.length);
        var player = data[r];
        if(player && player[this.prop] && player[this.prop] != max) {
          delete data[r];
          options.push({
            id: player.player.id,
            title: player.player.firstName + ' ' + player.player.lastName,
            value: player[this.prop],
            image: player.player.imageUrl ? 'http://files.eliteprospects.com/layout/players/' + player.player.imageUrl : 'https://s-media-cache-ak0.pinimg.com/236x/cb/07/c2/cb07c28b4df8752f44e10b935a65eb87.jpg',
            correct: false
          });
          if(max < player[this.prop]) {
            max = player[this.prop];
            correctAnswer = options.length -1;
          }
        }
      }

      options[correctAnswer].correct = true;

      this.options = options;
    });
  }
}
