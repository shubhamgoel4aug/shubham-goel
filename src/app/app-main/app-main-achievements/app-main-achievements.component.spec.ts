import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainAchievementsComponent } from './app-main-achievements.component';

describe('AppMainAchievementsComponent', () => {
  let component: AppMainAchievementsComponent;
  let fixture: ComponentFixture<AppMainAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
