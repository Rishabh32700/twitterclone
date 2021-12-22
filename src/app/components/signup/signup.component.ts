import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
    isSignedIn = false;
    constructor(public servicesService : ServicesService){}
    ngOnInit(){
      if(localStorage.getItem('user')!= null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }
    async onSignup(email:string, password:string, username:string, name:string){
      await this.servicesService.signup(email,password, username, name)
      if(this.servicesService.isLoggedIn)
      this.isSignedIn=true
    }
    async onSignin(email:string, password:string){
      await this.servicesService.signin(email,password)
      if(this.servicesService.isLoggedIn)
      this.isSignedIn=true
    }


}
