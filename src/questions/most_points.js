import {Playerstats_Question} from 'questions/playerstats';

export class Most_Points_Question extends Playerstats_Question {
  constructor(http) {
    super(http, 'TP');
    this.heading = 'Who got most points during the 14/15 SHL regular season for Modo?';
  }
}
