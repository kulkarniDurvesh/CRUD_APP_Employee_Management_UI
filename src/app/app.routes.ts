import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { EFormComponent } from './components/eform/eform.component';
import { canDeactivateGuard } from './guard/deactivateGuard/can-deactivate.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
        
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        canActivate:[authGuard],
        children:[
            {
                path:'employee',
                component:EmployeeComponent,
            },
            {
                path:'eform',
                component:EFormComponent,
                canDeactivate:[canDeactivateGuard]
            }
        ]
    }

];
