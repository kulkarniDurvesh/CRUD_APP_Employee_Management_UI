import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router); // Injecting Router

  let token = '';

  if (typeof window !== 'undefined' && localStorage) {
    token = localStorage.getItem('token') || '';
  }

  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization: token
    }
  });

  return next(modifiedRequest).pipe(
    
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Token is expired or invalid, log the user out
        localStorage.removeItem('token'); // Remove token from local storage
        router.navigate(['/login']); // Redirect to login page
      }
      return throwError(() => error);
    })
  );
};
