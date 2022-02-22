
import { Component, OnInit } from "@angular/core";
import { userModel } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { userservice } from "./user.services";

@Component({
    selector : 'user',
    templateUrl : './user.component.html',
})

export class usercomponent { 
   p:number =1;
     title: any ='create a user'
     userModel = new userModel();

      alertMessage:string ='';
      
     lstuser:userModel[]=[];
    

   APIbaseUrl : string='http://jsonplaceholder.typicode.com/users';
constructor(private userservices:userservice){
 this.userservices.getAll().subscribe(response=>{
    this.lstuser = response as userModel[];
    console.log(response)
  })
}

viewuser(user : userModel){
  this.title = 'view to user';
  this.userModel = user
}
edituser(user : userModel){
   this.title ='Edit a user';
   this.userModel = user;
}
adduser(){
  this.title = 'Create a user';
  this.userModel = new userModel();
}
saveuserdetails(){
  if(this.userModel.id){
    this.userservices.update(this.userModel.id,this.userModel).subscribe(response=>{
      console.log(response);
    })
  }
  else{
    this.userservices.create(this.userModel).subscribe(response=>{
      console.log(response)
    })
  }
}
}
