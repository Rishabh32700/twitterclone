import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  firestoreState : any ;
  userData:any;
  posts:string[]=[];
  postsURL:string[]=[];
  isLoggedIn=false;
  user: any;
  imageName: any;
  imageURL: any;
  constructor(public firebaseAuth:AngularFireAuth,
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private http : HttpClient  ) {}

   async signin(email:string, password:string)
   {
     await this.firebaseAuth.signInWithEmailAndPassword(email,password)
     .then(res=>{
       this.userData=res.user;
       this.isLoggedIn=true
       localStorage.setItem('user',JSON.stringify(res.user))
     })
     this.router.navigate(['/']);

   }

   async signup(email:string, password:string,username:string, name:string)
   {
     await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
     .then(res=>{
       this.userData=res.user;
      localStorage.setItem('user',JSON.stringify(res.user)) //So that whenever we refresh the page the user can just login without sending back data to the server
       return this.firestore.collection('users').doc(res.user?.uid).set({//
         email: email,
         password: password,
         name: name,
         user_name:username,
         tweets:[""],
         profilepicURL:"", ///profile
         bookmarks:[],
         follow:[]
        })


     })


     this.isLoggedIn=true
     this.router.navigate(['/']);
   }

   logout(){
     this.firebaseAuth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['/login']);
   }


   userdata:any
   getUserData(){
     this.firebaseAuth.onAuthStateChanged((user)=>{
       if(user){
         this.userdata = user
         console.log("User",this.userdata.uid)

       }
     })
   }

   tweets: any=[]

   getTweets(){
     this.firestore.collection("tweets").get().subscribe(data=>{
       data.forEach(val=>{
         let temp :any= val.data()
         console.log(temp.postsURL)
         this.tweets.push(temp.postsURL)
       })
     })
   }
}


