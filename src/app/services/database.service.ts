import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  databaseUrl = 'https://data.mongodb-api.com/app/data-ijcxi/endpoint/data/beta';

  databaseKey = 'pq8Q59bT7P4RYOZANqajAvsFxjAcDjJjimWZ0fTRpvGP6k0pAkkSPcDjKIRn9S4a';

  constructor(private http: HttpClient) { }

  getThing(){
    return this.http.post(this.databaseUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': this.databaseKey
     },
     params:
     {
       data: {
      "collection": "tweets",
      "database": "redtideDB",
      "dataSource": "Project-3"
     }
    }
    });
  }

  testFetchGetData(): Promise<any> {
    return fetch('https://data.mongodb-api.com/app/data-ijcxi/endpoint/data/beta/action/findOne', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': this.databaseKey
      },
      body: JSON.stringify({    "collection":"tweets",    "database":"redtideDB",    "dataSource":"Project-3", })
    });
  }

}
