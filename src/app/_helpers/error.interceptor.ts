import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor( ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([403].includes(err.status)) {
                console.log(err)
                if(err.error.documentation_url == "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
                    //TODO colocar swal
                    console.log('era pra ter um swal aqui no erro')
                    return;
            }
            const error = err.error?.message || err.statusText;
            return throwError(error);
        }))
    }
}
