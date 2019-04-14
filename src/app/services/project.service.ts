import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Project} from '../projects/project.model';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private URL = 'http://159.203.46.18/api/projects';

    constructor(private http: HttpClient) {
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.URL, httpOptions).pipe(
            catchError(this.handleError<Project[]>('getProjects', []))
        );
    }

    getProject(id: string): Observable<Project> {
        const url = `${this.URL}/${id}`;
        return this.http.get<Project>(url).pipe(
            catchError(this.handleError<Project>('getProject'))
        );
    }

    addProject(project: Project): Observable<Project> {
        return this.http.post<Project>(this.URL, {title: project.title, description: project.description}, {
                headers: new HttpHeaders({'x-auth-token': localStorage.getItem('access-token')})
            }
        ).pipe(
            catchError(this.handleError<Project>('addProject')),
        );
    }

    getOwner(id: string): Observable<any> {
        const url = `${this.URL}/${id}/owner`;
        return this.http.get<any>(url)
        .pipe(
            catchError(this.handleError<Project>('addProject')),
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
