import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public appTitle = "Servings Calculator";
  private _subscription_app_title$: any;

  constructor(private globalService: GlobalService) {
    this._subscription_app_title$ = this.globalService.appTitle.subscribe((value) => {
      this.appTitle = value
    })
   }

  ngOnInit(): void {
  }

}
