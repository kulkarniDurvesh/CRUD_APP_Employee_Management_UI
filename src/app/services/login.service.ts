import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../models/interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data:ILogin):Observable<any>{
    return this.http.post('http://localhost:5188/api/Authentication/Login',data)
  }
}
