import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppMainIntroductionComponent } from './app-main/app-main-introduction/app-main-introduction.component';
import { AppMainEducationComponent } from './app-main/app-main-education/app-main-education.component';
import { AppMainExperienceComponent } from './app-main/app-main-experience/app-main-experience.component';
import { AppMainTechnologiesComponent } from './app-main/app-main-technologies/app-main-technologies.component';
import { AppMainHobbiesComponent } from './app-main/app-main-hobbies/app-main-hobbies.component';
import { AppMainAchievementsComponent } from './app-main/app-main-achievements/app-main-achievements.component';
import { MenuComponentTracker } from './models/menu-component-tracker.model';

import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

const appRoutes: Routes = [
  { path: '', component: AppMainIntroductionComponent },
  { path: 'education', component: AppMainEducationComponent },
  { path: 'experience', component: AppMainExperienceComponent },
  { path: 'technologies', component: AppMainTechnologiesComponent },
  { path: 'achievements', component: AppMainAchievementsComponent },
  { path: 'hobbies', component: AppMainHobbiesComponent }
];

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [MenuComponentTracker],
  bootstrap: [AppComponent]
})
export class AppModule { }
