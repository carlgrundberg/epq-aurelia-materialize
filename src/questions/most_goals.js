import {Playerstats_Question} from 'questions/playerstats';

export class Most_Goals_Question extends Playerstats_Question {
  constructor(http) {
    super(http, 'G');
    this.heading = 'Who scored the most goals during the 14/15 SHL regular season for Modo?';
  }
}
