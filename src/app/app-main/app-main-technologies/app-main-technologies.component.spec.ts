import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainTechnologiesComponent } from './app-main-technologies.component';

describe('AppMainTechnologiesComponent', () => {
  let component: AppMainTechnologiesComponent;
  let fixture: ComponentFixture<AppMainTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
