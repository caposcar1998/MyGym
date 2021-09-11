import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['../app.component.scss']
})
export class SecureComponent implements OnInit {

  message = '';
  isLoadingResults = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
      this.sleep(500);
      this.router.navigate(['/home'])
    }


  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

}
