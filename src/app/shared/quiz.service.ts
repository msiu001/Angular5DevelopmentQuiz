import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//'selenium-webdriver/http';


@Injectable()
export class QuizService {

  //-----Properties----
  readonly rootUrl = 'http://localhost:65030/';



  //-----Helper------

  constructor( private http : HttpClient) { }


  //--- Http Methods-----
  insertParticipant ( name: string , email: string){
    var body= {
      Name: name,
      Email: email
    }

    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);

  }


}
