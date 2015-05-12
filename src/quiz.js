import {Most_Goals_Question} from 'questions/most_goals';
import {Most_Assists_Question} from 'questions/most_assists';
import {Most_Points_Question} from 'questions/most_points';
import $ from 'jquery'
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Quiz {
  showResult = false;
  isCorrect = false;
  isWrong = false;
  i = 1;
  questions = [ Most_Goals_Question, Most_Assists_Question, Most_Points_Question ];
  question = null;

  constructor(http){
    this.http = http;
  }

  activate(){
    this.next();
  }

  answer(e, option) {
    if(this.showResult) {
      return;
    }

    e.stopPropagation();
    this.showResult = true;
    if(option.correct) {
      this.isCorrect = true;
    } else {
      this.isWrong = true;
    }

    $('.card-image img').click();
  }

  next() {
    this.isCorrect = false;
    this.isWrong = false;
    this.showResult = false;
    this.i++;


    this.question = new this.questions[Math.floor(Math.random()*this.questions.length)](this.http);
    this.question.generate();
  }


  get progress() {
    return Math.round(this.i / 10 * 100);
  }
}
