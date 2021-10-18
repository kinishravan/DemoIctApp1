import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  public loginuser(user : Userdata):Observable<any>{
  return  this._http.post<any>("http://localhost:8090/login",user)
  }
}
