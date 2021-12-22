import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  name = '';
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private servicesService : ServicesService) { }
  openDialog() {
    const dialogRef = this.dialog.open(CommentModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deletepost() {
    const dialogRef = this.dialog.open(DeleteModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

posts:any=this.servicesService.tweets

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

  }

}



