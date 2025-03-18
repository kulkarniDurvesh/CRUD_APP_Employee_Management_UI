import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  debugger;
  if(component.employeeForm.controls['empName']?.dirty||component.employeeForm.controls['empName']?.touched){
    return confirm("Are you sure you want to leave the page")?true:false
  }
  console.log(component);
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);
  return true;
  
  //component.submitted == false && 
};
