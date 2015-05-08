import {Question} from 'questions/question';
import $ from 'jquery'
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Quiz {
  showResult = false;
  isCorrect = false;
  isWrong = false;
  i = 1;
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

    this.question = new Question(this.http);
    this.question.activate();
  }


  get progress() {
    return Math.round(this.i / 10 * 100);
  }
}
