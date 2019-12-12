import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import {User} from './models/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
}
