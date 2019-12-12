import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AppService } from '../../app.service'
import { Router } from "@angular/router"
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
users: User[]
title = 'Angular Socio login via Google!';
user: any;

constructor(private _socioAuthServ: AuthService, private user_service: AppService, private router: Router) { }
ngOnInit() {
  this.user = new User();
  this.user_service.findAllUsers()
  .toPromise().then( (users) => {this.users = users})
  .catch((err) => console.log('error in main component' , err))
}

// Method to sign in with google.
signIn(platform : string): void {
  platform = GoogleLoginProvider.PROVIDER_ID;
  this._socioAuthServ.signIn(platform).then(
    (response) => {
      console.log(platform + " logged in user data is= " , response);
      this.user.name = response.name;
      this.user.email = response.email;
      this.user.user_id = response.id;

      this.user_service.find(this.user)
      .toPromise().then((user) => {this.user= user; this.router.navigate(["app"])})
      .catch(err => console.log(err))
    }
  );
}

// Method to log out.
signOut(): void {
  this._socioAuthServ.signOut();
  this.user = null;
  console.log('User signed out.');
}


  //oauth client id + secret
///595390634225-500bd21qb61uqkrnpdm6r5pg6dc0kiq3.apps.googleusercontent.com
//MgnyKg-qsWYAmXICDOj9xkyB

//api key
//AIzaSyDCEqwO20jACgxhCzfZ2_Nb4T3es6kxjAw
}
