import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError, exhaustMap} from 'rxjs';
import { StorageService } from '@services/storage/storage.service';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  refresh=false;

  constructor(private storageService:StorageService, private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token= this.storageService.retrive('token');
    if(token){
      request=request.clone({
        setHeaders:{
          Authorization:`bearer ${token}`
        }
      })
    }
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{
        if(err.status === 401 && !this.refresh){
          this.refresh=true;
          this.storageService.clear();
          return this.authService.refreshToken().pipe(
            exhaustMap(res=>{
              if(res.success){
                this.authService.setAuth(res.data.token,res.data.user);
                request=request.clone({
                  setHeaders:{
                    Authorization:`bearer ${res.data.token}`
                  }
                });
              }
              return next.handle(request);
            })
          );
        }
        this.refresh=false;
        return throwError(()=>err);
      })
    );
  }
}
