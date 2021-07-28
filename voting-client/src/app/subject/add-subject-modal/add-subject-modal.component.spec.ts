import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectModalComponent } from './add-subject-modal.component';

describe('EditSubjectModalComponent', () => {
  let component: AddSubjectModalComponent;
  let fixture: ComponentFixture<AddSubjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubjectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
