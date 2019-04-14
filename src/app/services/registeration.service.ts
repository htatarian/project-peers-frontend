import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterationService {

    private URL = 'http://localhost:3000/api/users';

    constructor(private http: HttpClient) {

    }

    public resgister(credentials: any): Observable<any> {
        return this.http.post(this.URL, {
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            email: credentials.email,
            password: credentials.password,
        })
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            error.error);
    }
}
