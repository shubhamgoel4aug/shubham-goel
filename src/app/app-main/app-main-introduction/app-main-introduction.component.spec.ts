import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainIntroductionComponent } from './app-main-introduction.component';

describe('AppMainIntroductionComponent', () => {
  let component: AppMainIntroductionComponent;
  let fixture: ComponentFixture<AppMainIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
