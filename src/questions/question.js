export class Question{
  heading = 'Who got most points during the 14/15 SHL regular season for Modo?';
  options = [];
  url = 'http://api.eliteprospects.com/beta/teams/9/playerstats?filter=(season.startYear=2014%26gameType=REGULAR_SEASON)';

  constructor(http) {
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(xhr => {
      var res = JSON.parse(xhr.response);
      var data = res.data;
      var options = [];
      var max = -1;
      var correctAnswer = -1;

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
            correctAnswer = options.length -1;
          }
        }
      }

      options[correctAnswer].correct = true;

      this.options = options;
    });
  }
}

