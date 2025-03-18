import { inject,PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  // const token = localStorage.getItem('token');
  // const router = inject(Router);
  // if(token != null){
  //   return true;
  // }else{
  //   router.navigateByUrl('/login');
  //   return false;
  // }
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('token');
    if (token != null) {
      return true;
    } else {
      router.navigateByUrl('/login');
      return false;
    }
  }

  return false; // If on the server, deny access  
};
