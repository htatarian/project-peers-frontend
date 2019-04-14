import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectDetailComponent } from './new-project-detail.component';

describe('NewProjectDetailComponent', () => {
  let component: NewProjectDetailComponent;
  let fixture: ComponentFixture<NewProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
