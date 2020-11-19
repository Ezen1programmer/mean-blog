import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import {UsersComponent} from "./components/users/users.component";
import {UpdateUserProfileComponent} from './components/update-user-profile/update-user-profile.component';
import {JwtHelperService, JWT_OPTIONS} from "@auth0/angular-jwt";
import {JwtInterceptor} from "./interseptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UpdateUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [
    JwtHelperService,
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
