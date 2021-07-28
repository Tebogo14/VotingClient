import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { SubjectComponent } from './Subject/Subject.component';
import { SingleSubjectComponent } from './subject-Argument/subject-Argument.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',component: AppMainComponent,
    children: [
      { path: 'Subject', component: SubjectComponent },
      { path: 'SubjectArgument', component: SingleSubjectComponent },
      { path: 'Users', component: UsersComponent },
    ]
  }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }