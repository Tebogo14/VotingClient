import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubjectComponent } from './subject-Argument.component';

describe('SingleSubjectComponent', () => {
  let component: SingleSubjectComponent;
  let fixture: ComponentFixture<SingleSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
