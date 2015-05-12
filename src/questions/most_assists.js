import {Playerstats_Question} from 'questions/playerstats';

export class Most_Assists_Question extends Playerstats_Question {
  constructor(http) {
    super(http, 'A');
    this.heading = 'Who got most assists during the 14/15 SHL regular season for Modo?';
  }
}
