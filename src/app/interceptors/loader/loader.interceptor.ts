import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadService } from '@services/load/load.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loadService:LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadService.show();
    return next.handle(request).pipe(
      finalize(()=>this.loadService.hide())
    );
  }
}
