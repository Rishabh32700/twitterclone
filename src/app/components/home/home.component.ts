import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicesServices:ServicesService) { }
  userObj:any;
  ngOnInit(): void {
    this.servicesServices.getUserData()
    this.userObj = this.servicesServices.userdata
    console.log("UidFrom Home",this.userObj)
    this.servicesServices.getTweets()
  }

}




