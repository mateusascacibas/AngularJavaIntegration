
import { environment } from './../environments/environment';
import { Component, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) {}

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
    .toPromise().then(() => {}).catch((err) => {
      const error = throwError(err);
      error.subscribe();
    });
  
  }
  title = 'projectIntegration';
}
