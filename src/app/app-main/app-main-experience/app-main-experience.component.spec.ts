import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainExperienceComponent } from './app-main-experience.component';

describe('AppMainExperienceComponent', () => {
  let component: AppMainExperienceComponent;
  let fixture: ComponentFixture<AppMainExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
