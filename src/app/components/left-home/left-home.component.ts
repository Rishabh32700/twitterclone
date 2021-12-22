import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-left-home',
  templateUrl: './left-home.component.html',
  styleUrls: ['./left-home.component.css']
})
export class LeftHomeComponent implements OnInit {

  constructor(private firebaseService:ServicesService) { }

  handleLogout()
  {
    console.log("I am Logged OUT")
    this.firebaseService.logout();
  }
  ngOnInit(): void {
  }

}
