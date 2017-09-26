import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    // title = 'app';
    // url = "http://localhost:5000/api/login";
    //  user = { "email":"ab@ameyem.com", "password":"arun@123" };

    private headers = new Headers({'Content-Type': 'application/json'});    
   
       
    // username="ab";password:"arun@123";
    login(username: string, password: string) {
        const url = this.config.apiUrl + '/auth/login'; 
        // const url = "http://localhost:8000/auth/login";
        // const url = "http://api.ameyem.com/auth/login";
        // var  json = { username: username, password: password };
        var  json = { email: username, password: password };
    //     data = { username: username, password: password },
            // let options = new RequestOptions({method: RequestMethod.Post,  headers: config });

            
            var params = 'json='+json;

        console.log("In athentication service "+username +' '+password);
        return this.http
        .post(url, JSON.stringify(json), {headers: this.headers})
        // return this.http.post(url, params,options )
        // return this.http.post(url, data, config)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                let user = response.json();
                console.log(user )
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}