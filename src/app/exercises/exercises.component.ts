import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  result: String | undefined;
  constructor(private http: HttpClient) { 
  }
  
  getExe1(){
    const endPoint = environment.httpApi + "conditional/exe1?num=1";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': '*',
    });

     return this.http.get(endPoint, {
      headers,
      withCredentials: environment.withApiV2Credentials,
      responseType: 'text'
    })
    .subscribe(dados => this.result = dados);
  
  }
  ngOnInit(): void {
  }

}
