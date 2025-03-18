import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/interface/employeee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employeeService = inject(EmployeeService);
  employeeList:IEmployee[]=[]
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((res:any)=>{
      this.employeeList = Array.isArray(res) ? res : res.data || []; // Safe handling
    })
  }

}
