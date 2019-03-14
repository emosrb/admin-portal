import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule, MatGridListModule,MatInputModule,MatSelectModule,MatSlideToggleModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
