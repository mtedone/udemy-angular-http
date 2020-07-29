import { tap } from "rxjs/operators";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on its way");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Custom-Header", "xyz"),
    });
    return next.handle(modifiedRequest);
  }
}
