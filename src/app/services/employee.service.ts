import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/interface/employeee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<IEmployee>{
    return this.http.get<IEmployee>('http://localhost:5188/api/Employee/GetAllEmployees')
  }
}
