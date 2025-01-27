import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

interface User {
  id: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent {
  constructor(private router: Router) {}

  private users$ = new BehaviorSubject<User[]>([
    { id: 1, name: 'Alice', lastName: 'A', age: 11, email: 'a@mail.com' },
    { id: 2, name: 'Bob', lastName: 'B', age: 22, email: 'b@mail.com' },
    { id: 3, name: 'Charles', lastName: 'C', age: 33, email: 'c@mail.com' },
    { id: 4, name: 'Dave', lastName: 'D', age: 44, email: 'd@mail.com' },
    { id: 5, name: 'Eve', lastName: 'E', age: 55, email: 'e@mail.com' },
    { id: 6, name: 'Flo', lastName: 'F', age: 66, email: 'f@mail.com' },
    { id: 7, name: 'Guy', lastName: 'G', age: 77, email: 'g@mail.com' },
    { id: 8, name: 'Hans', lastName: 'H', age: 88, email: 'h@mail.com' },
    { id: 9, name: 'Ivy', lastName: 'I', age: 99, email: 'i@mail.com' },
  ]);

  public ageFilter$ = new BehaviorSubject<number>(0);
  public ageFilterR$ = new BehaviorSubject<number>(0);

  public filteredUsers$: Observable<User[]> = combineLatest([
    this.users$,
    this.ageFilter$,
  ]).pipe(
    map(([users, ageFilter]) => users.filter((user) => user.age >= ageFilter))
  );

  public filteredUsersR$: Observable<User[]> = combineLatest([
    this.users$,
    this.ageFilterR$,
  ]).pipe(
    map(([users, ageFilterR]) => users.filter((user) => user.age >= ageFilterR))
  );

  public updateAgeFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.ageFilter$.next(Number(target.value));
  }

  public updateAgeFilterR(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.ageFilterR$.next(Number(target.value));
  }

  public editUser(userId: number): void {
    this.router.navigate([ROUTER_TOKENS.USER, userId]);
  }

  public navigateToNotFound() {
    this.router.navigate(['registration'])
  }
}
