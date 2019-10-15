import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainEducationComponent } from './app-main-education.component';

describe('AppMainEducationComponent', () => {
  let component: AppMainEducationComponent;
  let fixture: ComponentFixture<AppMainEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
