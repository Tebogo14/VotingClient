import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SubjectComponent } from './Subject/Subject.component';
import { AppConsts } from 'src/AppConsts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { SingleSubjectComponent } from './subject-Argument/subject-Argument.component';
import { FormsModule } from '@angular/forms';
import { EditSubjectModalComponent } from './subject-Argument/edit-Subject-modal/edit-Subject-modal.component';
import { API_BASE_URL, UserServiceProxy, VoteServiceProxy } from 'src/services/voting-service.service';
import { AddSubjectModalComponent } from './Subject/add-subject-modal/add-subject-modal.component';
import { dataService } from 'src/services/dataService';
import { LoginComponent } from './login/login.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { UsersComponent } from './users/users.component';
import { AddUserModelComponent } from './users/add-user-model/add-user-model.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppMainComponent,
    SubjectComponent,
    SingleSubjectComponent,
    EditSubjectModalComponent,
    AddSubjectModalComponent,
    LoginComponent,
    ViewResultsComponent,
    UsersComponent,
    AddUserModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],

  entryComponents: [
    EditSubjectModalComponent,
    AddSubjectModalComponent
  ],
  providers: [
    BsModalRef,
    dataService,
    UserServiceProxy,
    VoteServiceProxy,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getRemoteServiceBaseUrl(): string {

  return AppConsts.remoteServiceBaseUrl;

}
