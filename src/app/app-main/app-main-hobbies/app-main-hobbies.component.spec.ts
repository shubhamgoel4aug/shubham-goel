import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainHobbiesComponent } from './app-main-hobbies.component';

describe('AppMainHobbiesComponent', () => {
  let component: AppMainHobbiesComponent;
  let fixture: ComponentFixture<AppMainHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
