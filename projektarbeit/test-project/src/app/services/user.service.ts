import { Injectable } from '@angular/core';
import { from, Observable, tap, merge } from 'rxjs';
import { UserType } from '../types/userType';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: 1, name: 'Alice', lastName: 'A', age: 11, email: 'a@mail.com' },
    { id: 2, name: 'Bob', lastName: 'B', age: 22, email: 'b@mail.com' },
    { id: 3, name: 'Charles', lastName: 'C', age: 33, email: 'c@mail.com' },
    { id: 4, name: 'Dave', lastName: 'D', age: 44, email: 'd@mail.com' },
    { id: 5, name: 'Eve', lastName: 'E', age: 55, email: 'e@mail.com' },
    { id: 6, name: 'Flo', lastName: 'F', age: 66, email: 'f@mail.com' },
    { id: 7, name: 'Guy', lastName: 'G', age: 77, email: 'g@mail.com' },
    { id: 8, name: 'Hans', lastName: 'H', age: 88, email: 'h@mail.com' },
    { id: 9, name: 'Ivy', lastName: 'I', age: 99, email: 'i@mail.com' },
  ];

  private userNames: string[] = [];

  constructor() {}

  getAllUsers(): Observable<UserType[]> {
    return from([this.users]);
  }

  getUserNames() {
    merge(this.users).pipe(tap(user => {
      this.userNames.push(user.name);
    }));
  }

  getUser(id: number): Observable<UserType | undefined> {
    const user = this.users.find((user) => user.id === id);
    return from([user]);
  }  
}
