import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  signupService(reqdata: any)
 {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.PostService('/bookstore_user/registration',reqdata,false,httpOptions)
  }
  loginService(reqdata:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.PostService('/bookstore_user/login',reqdata,false,httpOptions)
  }
}
