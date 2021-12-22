import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { TwitterGuard } from './gaurds/twitter.guard';
import { HomeComponent } from './components/home/home.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes =[
  {
    path:'',
    // loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
    canActivate: [TwitterGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile/:id',
    component: ProfilePageComponent,
    // children:[
    //   {
    //     path:'profile/:name',
    //     component:PostsComponent
    //   }
    // ]
  },
  {
    path:'messages',
    component:MessagesComponent
  },
  {
    path:"signup",
    component: SignupComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }







