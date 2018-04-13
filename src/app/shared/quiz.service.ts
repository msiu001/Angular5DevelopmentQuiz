import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class QuizService {

  //-----Properties----
  readonly rootUrl = 'http://localhost:65030/';
  qns : any[];
  seconds: number;
  timer;
  qnProgress: number;
  

  //-----Helper------
  constructor( private http : HttpClient) { }
  displayTimeElapsed(){
    return Math.floor(this.seconds / 3600 ) + ':' + Math.floor(this.seconds / 60 ) + ':' + Math.floor(this.seconds % 60);
  }


  //--- Http Methods-----
  insertParticipant ( name: string , email: string){
    var body= {
      Name: name,
      Email: email
    }

    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);

  }

  getQuestions (){
    return this.http.get(this.rootUrl + '/api/Questions');
  }


}
