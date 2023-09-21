import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseURL='https://bookstore.incubation.bridgelabz.com'

  PostService(url: string, reqBody: object, token: boolean, httpOption: any) {
    console.log("Inside function" + reqBody)
    return this.http.post(this.baseURL + url, reqBody, token && httpOption);
  }
}
