import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService} from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
// Importing social login module and google login provider.
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
// Client id for the google oauth. This is used for validation of our application to google.
// https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
const google_oauth_client_id:string = '595390634225-500bd21qb61uqkrnpdm6r5pg6dc0kiq3.apps.googleusercontent.com';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule.initialize(config),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
