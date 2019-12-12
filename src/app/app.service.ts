import { Injectable, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from './models/user';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8000/api/users')
  }
  getAll() {
    return this.http.get('http://localhost:8000/api/people')
        .map((res: Response) => res.json());
  }

  find(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8000/user/', user)
  }

}

