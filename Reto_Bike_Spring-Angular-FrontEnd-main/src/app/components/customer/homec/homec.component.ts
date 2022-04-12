import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.css']
})
export class HomecComponent implements OnInit {

  public userDetails: any;

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    }else{
      this.signOut();
    }
  }

  signOut() : void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

}
