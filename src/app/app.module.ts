import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { RightHomeComponent } from './components/right-home/right-home.component';
import { MiddleHomeComponent } from './components/middle-home/middle-home.component';
import { LeftHomeComponent } from './components/left-home/left-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { NavbarMiddleComponent } from './components/navbar-middle/navbar-middle.component';
import { NavbarRightComponent } from './components/navbar-right/navbar-right.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MiddleHomeComponent,
    LeftHomeComponent,
    RightHomeComponent,
    NavbarComponent,
    NavbarLeftComponent,
    NavbarMiddleComponent,
    NavbarRightComponent,
    CreatePostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



