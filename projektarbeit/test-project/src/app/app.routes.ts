import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NotingComponent } from './noting/noting.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { RegistrationComponent } from './registration/registration.component';
import { ObservableComponent } from './observable/observable.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

export enum ROUTER_TOKENS {
  HOME = 'home',
  TODO_LIST = 'todo-list',
  NOTING = 'noting',
  CONTACT = 'contact',
  FEEDBACK = 'feedback',
  REGISTRATION = 'registration',
  OBSERVABLE = 'admin',
  USER = 'user',
}

export const routes: Routes = [
  { path: ROUTER_TOKENS.HOME, component: HomeComponent, title: 'HOME' },
  { path: ROUTER_TOKENS.TODO_LIST, component: TodoListComponent },
  { path: ROUTER_TOKENS.NOTING, component: NotingComponent },
  { path: ROUTER_TOKENS.CONTACT, component: ContactComponent },
  { path: ROUTER_TOKENS.FEEDBACK, component: FeedbacksComponent },
  { path: ROUTER_TOKENS.REGISTRATION, component: RegistrationComponent },
  { path: ROUTER_TOKENS.OBSERVABLE, component: ObservableComponent,  },
  { path: `${ROUTER_TOKENS.USER}/:id`, component: UserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
