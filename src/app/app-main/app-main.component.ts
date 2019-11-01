import { Component, OnInit } from '@angular/core';
import { VersionService } from '../services/version.service'

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  appVersion: any;

  constructor(private versionService: VersionService) { }

  ngOnInit() {
    console.log(this.versionService.getAppVersion().subscribe(x => {this.appVersion = x;}));
  }

}
