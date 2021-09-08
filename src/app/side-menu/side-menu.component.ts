import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  profileJson: string = ""
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (this.profileJson = JSON.stringify(profile,null,2)))
  }

}
