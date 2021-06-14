import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor,  HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({

        params: req.params.set('api_key','e256ee3135492528a167dbf2f4a87df2')
      }
    )
    return next.handle(clone)
  }
}
