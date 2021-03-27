import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private snackBar: MatSnackBar
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([403].includes(err.status)) {
                console.log(err)
                if (err.error.documentation_url == "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting")
                this.snackBar.open('Limite de requisições atingido', null, {
                    duration: 2000,
                    panelClass: ['text-white', 'font-weight-bold']
                  });
                return;
            }
            const error = err.error?.message || err.statusText;
            return throwError(error);
        }))
    }
}
