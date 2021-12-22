import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent implements OnInit {
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

  login(NgForm: NgForm): void{
  
  }
  
  openRegister(): void{
  
  }
}



  


