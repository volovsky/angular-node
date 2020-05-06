import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { environment } from '../../environments/environment';

//import 'rxjs/add/operator/map';
//import { map } from 'rxjs';
//import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

    private apiUrl = `${environment.apiUrl}/posts`;
    private handleError: HandleError;

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor(
        private http: HttpClient,
        private httpErrorHandler: HttpErrorHandler
    ) {
      this.handleError = this.httpErrorHandler.createHandleError('PostsService')
    } 

    getAllPosts() {
        /*return this.http.get(`${this.apiUrl}`).map((posts) => {
           return posts;
        });*/

        return this.http.get(`${this.apiUrl}`).pipe(
            catchError(this.handleError('getAllPosts', null))
        )
    }

}