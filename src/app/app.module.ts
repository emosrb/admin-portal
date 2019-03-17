import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule,MatInputModule, MatSelectModule, MatSlideToggleModule,MatListModule,MatDialogModule} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';
import { FormsModule } from '@angular/forms';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent,DialogOverviewExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule, MatGridListModule,MatInputModule,MatSelectModule,MatSlideToggleModule,MatListModule,MatDialogModule
  ],
  providers: [LoginService,AddBookService,UploadImageService,GetBookListService,GetBookService,EditBookService,RemoveBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
