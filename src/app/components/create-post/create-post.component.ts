import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ServicesService } from 'src/app/services.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  filePath:any=''
  uploadTask: any;
  fireStorage: any;
  user: any;
  imageName: any;
  imageURL: any;
  userObj:any;
  text:any
  constructor(public af : AngularFireStorage, private servicesService:ServicesService, private firestore: AngularFirestore) { }
  upload(event:any) {    
    this.filePath = event.target.files[0]
  }
  async uploadImage(tweetText:any){
    console.log(this.filePath)
    this.uploadTask = this.af.upload(`/images/`+this.filePath.name, this.filePath);   
    this.uploadTask.then((uploadSnap:any)=>{
      this.af.ref(`/images/`+this.filePath.name).getDownloadURL().subscribe((url: any)=>{
        console.log("UPLOAD COMPLETE")

        console.log("URL=",url)
        console.log(this.userObj)

        this.firestore.collection('tweets').add({
          text:"",
          likes:[],
          comments:[],
          postsURL:url
        }).then((res)=>{
          //text
          this.firestore.collection('tweets').doc(this.userObj.uid).update({
            text: tweetText
          })
          //uid
          console.log(res)
          const doc = this.firestore.collection('users').doc(this.userObj.uid).get();
          doc.subscribe((snapshot)=>{
            console.log(snapshot.data())
            let tweets :any = snapshot.data()
            this.firestore.collection('users').doc(this.userObj.uid).update({
              tweets:[...tweets.tweets,res.id]
            })
            console.log(this.userObj.uid)
          })
        })
      })
    })     
  }

 


  ngOnInit(): void {
    this.servicesService.getUserData()
    this.userObj = this.servicesService.userdata
    console.log("Uid",this.userObj)
  }

  

}
