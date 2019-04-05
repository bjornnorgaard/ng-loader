import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { GlobalLoaderService } from '../global-loader/global-loader.service';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderInterceptor implements HttpInterceptor {

  private activeRequests: number = 0;

  constructor(private loader: GlobalLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loader.startLoading();
    }
    this.activeRequests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
            this.loader.stopLoading();
        }
      })
    )
  }

}
