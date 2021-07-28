import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditSubjectModalComponent } from './edit-Subject-modal/edit-Subject-modal.component';
import Swal from 'sweetalert2'; 
import {SubjectArgumentResponse, SubjectResponse, VoteServiceProxy } from 'src/services/voting-service.service';
import { dataService } from 'src/services/dataService';

@Component({
  selector: 'app-subject-Argument',
  templateUrl: './subject-Argument.component.html',
  styleUrls: ['./subject-Argument.component.css']
})
export class SingleSubjectComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private route: ActivatedRoute,
    private SubjectService: VoteServiceProxy,
    private modalService: BsModalService,
    private SubjectData:dataService) { }


  subject: SubjectResponse = new SubjectResponse();
  newSubject: SubjectArgumentResponse = new SubjectArgumentResponse();

  ngOnInit(): void {
    this.subject = this.SubjectData.getScope() as SubjectResponse;
  }

  editSubject() {

    const initialState = {
      subjectId: this.subject.subjectId,
      userId: this.subject.userId
    }

    this.bsModalRef = this.modalService.show(EditSubjectModalComponent, Object.assign({}, {initialState}));

    this.bsModalRef.content.outcome.subscribe(data => {

      this.newSubject = new SubjectArgumentResponse();
      this.newSubject.argument = data;
      this.newSubject.createDate = new Date();

      this.subject.subjectArguments.push(this.newSubject);
    })
  }
}
