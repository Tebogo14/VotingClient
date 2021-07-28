import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { VoteServiceProxy } from 'src/services/voting-service.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-Subject-modal',
  templateUrl: './add-Subject-modal.component.html',
  styleUrls: ['./add-Subject-modal.component.css']
})
export class AddSubjectModalComponent implements OnInit {

  constructor( public bsModalRef: BsModalRef,
    private SubjectService: VoteServiceProxy) { }

  title:string;
  description:string;
  companyId: number;
  userId: number;

  @Output() outcome = new EventEmitter<any>();

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }

  save()
  {
   this.SubjectService.createSubject(this.title,this.description,this.userId,this.companyId).subscribe(() => {
      this.bsModalRef.hide();
      Swal.fire(
        'Add!',
        'You have successfully added a subject.',
        'success'
      ).then(() =>{
        this.outcome.emit()
      })
   })
  }

}
