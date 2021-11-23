import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  result: String | undefined;


  classExe1(): Observable<string> {
    let name1 = window.prompt("Enter the name 1: ");
    let age1 = window.prompt("Enter the age 1: ");
    let name2 = window.prompt("Enter the name 2: ");
    let age2 = window.prompt("Enter the age 2: ");
    const endPoint = environment.httpApi + "class/exe1?name1=" + name1 + "&age1=" + age1 + "&name2=" + name2 + "&age2=" + age2;
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
  }

  classExe3(): Observable<string> {
    let name1 = window.prompt("Enter the name 1: ");
    let salary1 = window.prompt("Enter the salary 1: ");
    let name2 = window.prompt("Enter the name 2: ");
    let salary2 = window.prompt("Enter the salary 2: ");
    const endPoint = environment.httpApi + "class/exe3?cod1=1&name1=" + name1 + "&salary1=" + salary1 + "&cod2=2&name2=" + name2 + "&salary2=" + salary2;
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
  }

  conditionalExe1(): Observable<string> {
    let num = window.prompt("Enter the number: ");
    const endPoint = environment.httpApi + "conditional/exe1?num=" + num;
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
  }

  conditionalExe2(): Observable<string> {
    let num = window.prompt("Enter the number: ");
    const endPoint = environment.httpApi + "conditional/exe2?num=" + num;
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
  }

  conditionalExe3(): Observable<string> {
    let num1 = window.prompt("Enter the number 1: ");
    let num2 = window.prompt("Enter the number 2: ");
    const endPoint = environment.httpApi + "conditional/exe3?num1=" + num1 + "&num2=" + num2;
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
  }

  conditionalExe4(): Observable<string> {
    let num1 = window.prompt("Enter the start time: ");
    let num2 = window.prompt("Enter the end time: ");
    const endPoint = environment.httpApi + "conditional/exe4?startTime=" + num1 + "&endTime=" + num2;
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
  }

  heritageExe1(): Observable<string> {
    const endPoint = environment.httpApi + "heritage/exe1";
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
  }

  sequentialExe1(): Observable<string> {
    let num1 = window.prompt("Enter the number 1: ");
    let num2 = window.prompt("Enter the number 2: ");
    const endPoint = environment.httpApi + "sequential/exe1?num1=" + num1 + "&num2=" + num2;
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
  }

  vectorAndMatrixExe1(): Observable<string> {
    const endPoint = environment.httpApi + "vectormatrix/exe1";
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
  }
}
