import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: Observable<User[]>;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseurl: string) {
    //this.users = this.http.get<User[]>(this.baseurl + 'user');
     
    this.users = new Observable(s => {
      s.next([new User("jonas", 2), new User("Johan", 10), new User("jonas", 2), new User("Johan", 10), new User("jonas", 2), new User("Johan", 10), new User("jonas", 2), new User("Johan", 10), new User("jonas", 2), new User("Johan", 10)])
    });
    
  }

  async updateAll(): Promise<User[] | undefined> {
    return this.http.get<User[]>(this.baseurl + 'user').toPromise();
  }

  async updateUser(user: User): Promise<User | undefined> {
    return this.http.put<User>(this.baseurl + 'user', user).toPromise();
  }

  async addUser(user: User): Promise<User | undefined> {
    return this.http.post<User>(this.baseurl + 'user', user).toPromise();
  }
}

export class User {
  name: string | undefined;
  lines: number | undefined;
  editing: boolean = false;

  constructor(name: string, lines: number) {
    this.name = name;
    this.lines = lines;
  }
}
