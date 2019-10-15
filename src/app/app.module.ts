import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppMainIntroductionComponent } from './app-main/app-main-introduction/app-main-introduction.component';
import { AppMainEducationComponent } from './app-main/app-main-education/app-main-education.component';
import { AppMainExperienceComponent } from './app-main/app-main-experience/app-main-experience.component';
import { AppMainTechnologiesComponent } from './app-main/app-main-technologies/app-main-technologies.component';
import { AppMainHobbiesComponent } from './app-main/app-main-hobbies/app-main-hobbies.component';
import { AppMainAchievementsComponent } from './app-main/app-main-achievements/app-main-achievements.component';
import { MenuComponentTracker } from './models/menu-component-tracker.model'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppMainIntroductionComponent,
    AppMainEducationComponent,
    AppMainExperienceComponent,
    AppMainTechnologiesComponent,
    AppMainHobbiesComponent,
    AppMainAchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponentTracker],
  bootstrap: [AppComponent]
})
export class AppModule { }
