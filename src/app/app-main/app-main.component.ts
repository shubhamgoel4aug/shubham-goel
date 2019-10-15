import { Component, OnInit } from '@angular/core';
import { MenuComponentTracker} from '../models/menu-component-tracker.model'

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  constructor(private appMainCurrentMenu: MenuComponentTracker) { }

  ngOnInit() {
  }

}
