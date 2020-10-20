import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { IMovie, IUser } from '../interfaces';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ConfigService } from '../api_settings/config.service';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS','Access-Control-Max-Age': '86400', 'Access-Control-Allow-Origin':'true',"Access-Control-Allow-Headers":"X-Requested-With, content-type"});
    _baseUrl: string = '';

    constructor(private http: Http,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    getMovies(): Observable<IMovie[]> {
        return this.http.get(this._baseUrl + '/movie')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
    createMovie(name: string, releaseYear: string, description: string, director: string): Promise<IMovie> {
        return this.http.post(this._baseUrl + '/movie/PostMovie?name='+name+'&releaseYear='+releaseYear+'&description='+description+'&director='+director, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    deleteMovie(id: number): Observable<void> {
        return this.http.delete(this._baseUrl + '/movie/DeleteMovie/' + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    authentificate(username:string,pass:string): Observable<IUser> {
        return this.http.get(this._baseUrl + '/user/Authenticiraj?username='+username+"&pass="+pass)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}