import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserServiceProxy } from 'src/services/voting-service.service';
import { AddUserModelComponent } from './add-user-model/add-user-model.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private modalService: BsModalService,
    private UserService:UserServiceProxy) { }

  bsModalRef: BsModalRef;
  username = window.atob(JSON.parse(localStorage.getItem('token')));

  companyId :number = +this.username.split(":")[2] as number;
  users: any;
  ngOnInit(): void {
    this.GetUser();
  }

  GetUser()
  {
    this.UserService.getUsers(this.companyId).subscribe((response) => {
      this.users = response;
    })
  }


  addUser() {

    const initialState = {
      companyId: this.username.split(":")[2],
      userId: this.username.split(":")[1]
    }
    this.bsModalRef = this.modalService.show(AddUserModelComponent, Object.assign({}, {initialState}));
    this.bsModalRef.content.outcome.subscribe(data => {
      this.GetUser();
    })
  }

}
