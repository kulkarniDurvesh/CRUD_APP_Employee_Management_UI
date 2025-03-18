import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILogin } from '../../models/interface/login';
import { LoginService } from '../../services/login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginService=inject(LoginService);
  router = inject(Router);
  loginObj:ILogin={
    userName:'',
    password:''
  }

  onLogin(){
    this.loginService.login(this.loginObj).subscribe((res)=>{
      if(res.token != null){
        localStorage.setItem("token",res.token);
        this.router.navigateByUrl('/employee');
      }else{
        this.router.navigateByUrl('/login');
      }
    })
  }
}
