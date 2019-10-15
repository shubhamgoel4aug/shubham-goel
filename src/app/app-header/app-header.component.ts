import { Component, OnInit } from '@angular/core';
import { MenuComponentTracker } from '../models/menu-component-tracker.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private appMainCurrentMenu: MenuComponentTracker) { }

  ngOnInit() {
  }

  menu_introduction_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "IntroductionComponent";
  }

  menu_education_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "EducationComponent";
  }

  menu_experience_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "ExperienceComponent";
  }

  menu_technologies_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "TechnologiesComponent";
  }

  menu_achievements_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "AchievementsComponent";
  }

  menu_hobbies_click() {
    this.appMainCurrentMenu.AppMainCurrentMenuComponent = "HobbiesComponent";
  }

}
