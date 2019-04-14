import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    private URL = 'http://localhost:3000/api/auth';

    constructor(private http: HttpClient) {
    }

    public authenticate(credentials: any): Observable<any> {
        return this.http.post(this.URL, {email: credentials.email, password: credentials.password}, {responseType: 'text'})
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    public logout() {
        localStorage.removeItem('access-token');
    }

    public getToken(): string {
        return localStorage.getItem('access-token');
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
            error.status);
    }
}
