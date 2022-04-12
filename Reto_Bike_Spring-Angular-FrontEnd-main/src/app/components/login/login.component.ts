import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService : SocialAuthService
  ) { 
  }

  ngOnInit(): void {
  }

  signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));

      if(data.email == "pavaserpaesnaider@gmail.com") {
        this.router.navigateByUrl('/home').then();
      }else{
        this.router.navigateByUrl('/homec').then();
      }
      
    })
  }

}
