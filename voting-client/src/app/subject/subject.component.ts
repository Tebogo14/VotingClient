import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { dataService } from 'src/services/dataService';
import { SubjectResponse, UserServiceProxy, VoteServiceProxy } from 'src/services/voting-service.service';
import Swal from 'sweetalert2';
import { AddSubjectModalComponent } from './add-subject-modal/add-subject-modal.component';

@Component({
  selector: 'app-Subject',
  templateUrl: './Subject.component.html',
  styleUrls: ['./Subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private SubjectService: VoteServiceProxy 
              ,private UserService: UserServiceProxy,
              private modalService: BsModalService,
              private SubjectData: dataService,
              private router: Router) { }

  subject: Array<SubjectResponse>  = new Array<SubjectResponse>();
  bsModalRef: BsModalRef;
  username = window.atob(JSON.parse(localStorage.getItem('token')));

  ngOnInit(): void {
    this.GetAllSubject();
  }


  GetAllSubject() {
      this.SubjectService.getVoteSubjects(this.username.split(":")[0]).subscribe((response) => {
        this.subject = response;
      })
  }

  addSubject() {

    const initialState = {
      companyId: this.username.split(":")[2],
      userId: this.username.split(":")[1]
    }
    this.bsModalRef = this.modalService.show(AddSubjectModalComponent, Object.assign({}, {initialState}));
    this.bsModalRef.content.outcome.subscribe(data => {
      this.GetAllSubject();
    })
  }

  viewArgument(subject:SubjectResponse)
  {
    this.SubjectData.setScope(subject);
    this.router.navigate(["/SubjectArgument"]);
  }

}
