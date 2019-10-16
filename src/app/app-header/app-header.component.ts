import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menu_introduction_click() {
    this.router.navigateByUrl('');
  }

  menu_education_click() {
    this.router.navigateByUrl('education');
  }

  menu_experience_click() {
    this.router.navigateByUrl('experience');
  }

  menu_technologies_click() {
    this.router.navigateByUrl('technologies');
  }

  menu_achievements_click() {
    this.router.navigateByUrl('achievements');;
  }

  menu_hobbies_click() {
    this.router.navigateByUrl('hobbies');
  }

}
