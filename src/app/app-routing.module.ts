import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { TwitterGuard } from './gaurds/twitter.guard';
import { HomeComponent } from './components/home/home.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

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
    path:'profile',
    component: ProfilePageComponent
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







