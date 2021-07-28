import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserServiceProxy } from 'src/services/voting-service.service';

@Component({
  selector: 'app-add-user-model',
  templateUrl: './add-user-model.component.html',
  styleUrls: ['./add-user-model.component.css']
})
export class AddUserModelComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,
    private UserService: UserServiceProxy) { }

  companyId: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;

  @Output() outcome = new EventEmitter<any>();

  ngOnInit(): void {


  }


  close() {
    this.bsModalRef.hide();
  }

  save() {
     this.UserService.registerUser(this.companyId,this.email,this.phone,this.firstName,this.lastName ,["Employee"]).subscribe(() => {
      this.bsModalRef.hide();
      this.outcome.emit();
     })
  }


}
