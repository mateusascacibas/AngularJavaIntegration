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

  classExe2(): Observable<string> {
    let name1 = window.prompt("Enter the name 1: ");
    let salary1 = window.prompt("Enter the salary 1: ");
    let name2 = window.prompt("Enter the name 2: ");
    let salary2 = window.prompt("Enter the salary 2: ");
    const endPoint = environment.httpApi + "class/exe2?cod1=1&name1=" + name1 + "&salary1=" + salary1 + "&cod2=2&name2=" + name2 + "&salary2=" + salary2;
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

  capacityElevator: number = 0;
  totalFloors: number = 0;
  peopleInside: number = 0;
  currentFloor: number = 0;
  classExe3(): Observable<string> {
    if (this.capacityElevator == 0) {
      let capacityElevatorInput = window.prompt("Digite a capacidade do elevador: ");
      if (capacityElevatorInput != null) {
        this.capacityElevator = parseInt(capacityElevatorInput);
      }
      let totalFloorsInput = window.prompt("Digite o total de andades do predio: ");
      if (totalFloorsInput != null) {
        this.totalFloors = parseInt(totalFloorsInput);
      }

    }
    let value = window.prompt("Digite 0 para sair.\n1 - Para entrar uma pessoa no elevador\n2 - Para sair uma pessoa do elevador"
      + "\n3 - Para subir um andar\n4 - Para descer um andar\n 5 - Para mostrar as informações atuais");
    const endPoint = environment.httpApi + "class/exe3?capacityElevator=" + this.capacityElevator + "&totalFloors=" + this.totalFloors + "&currentFloor" + this.currentFloor + "&peopleInside" + this.peopleInside + "&method=" + value;

    if (value == '1' && this.peopleInside < this.capacityElevator) {
      this.peopleInside = this.peopleInside + 1;
    }
    if (value == '2' && this.peopleInside > 0) {
      this.peopleInside = this.peopleInside - 1;
    }
    if (value == '3' && this.currentFloor < this.capacityElevator) {
      this.currentFloor = this.currentFloor + 1;
    }
    if (value == '4' && this.currentFloor > 0) {
      this.peopleInside = this.currentFloor - 1;
    }
    if (value == '0') {
      this.capacityElevator = 0;
      this.totalFloors = 0;
      this.currentFloor = 0;
      this.peopleInside = 0;
    }

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

  sequentialExe2(): Observable<string> {
    let num1 = window.prompt("Enter the number 1: ");
    let num2 = window.prompt("Enter the number 2: ");

    let num3 = window.prompt("Enter the number 3: ");
    let num4 = window.prompt("Enter the number 4: ");
    const endPoint = environment.httpApi + "sequential/exe2?num1=" + num1 + "&num2=" + num2 + "&num3=" + num3 + "&num4=" + num4;
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

  sequentialExe3(): Observable<string> {
    let num1 = window.prompt("Enter the employee number: ");
    let num2 = window.prompt("Enter the hours: ");
    let num3 = window.prompt("Enter the salary for hour: ")
    const endPoint = environment.httpApi + "sequential/exe3?num1=" + num1 + "&num2=" + num2 + "&num3=" + num3;
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

  loopExe1(): Observable<string> {
    let num1 = window.prompt("Enter the number: ");
    const endPoint = environment.httpApi + "loop/exe1?num=" + num1;
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
