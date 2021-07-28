import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { VoteServiceProxy } from 'src/services/voting-service.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-edit-Subject-modal',
  templateUrl: './edit-Subject-modal.component.html',
  styleUrls: ['./edit-Subject-modal.component.css']
})
export class EditSubjectModalComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef,
    private SubjectService: VoteServiceProxy) { }

    description:string;
    subjectId: number;
    userId: number;

  @Output() outcome = new EventEmitter<any>();

  ngOnInit(): void {

  
  }


  close() {
    this.bsModalRef.hide();
  }

  save()
  {
   this.SubjectService.createSubjectArgument(this.subjectId,this.description,this.userId).subscribe(() => {
    this.bsModalRef.hide();
    this.outcome.emit(this.description);
   })
  }

}
