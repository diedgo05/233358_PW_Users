import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iusers } from '../../interface/i-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_base = 'https://jsonplaceholder.typicode.com/users/'

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Iusers[]>{
   return this._http.get<Iusers[]>(this.url_base);
  }

  get(): Observable<Iusers>{
    return this._http.get<Iusers>(this.url_base + 1);
  }
}
