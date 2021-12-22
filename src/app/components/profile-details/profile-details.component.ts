import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  name:any='';
  userData = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.name = this.route.snapshot.paramMap.get('name');
    console.warn(this.route.snapshot.paramMap.get('id'))
    //activated route se id nikal
    //http req to backend for profil
    //save to userdata
  }

}
