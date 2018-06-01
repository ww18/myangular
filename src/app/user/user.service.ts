//import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { User} from './model/User';
//import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
//@Injectable()
//export class UserService {
//  public userListURL = '/api/users';
//  constructor(public http: Http) { }
//  public getUsers():Observable<User[]>{
//    return this.http.get(this.userListURL)
//           .map((res:Response) => res.json().data as User[])
//  }
//}
