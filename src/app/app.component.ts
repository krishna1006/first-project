import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
   export class AppComponent {
  title = 'RK IT Technology';
  viewMode : string ='rama';
   constructor(private router : Router){

   }
    logout() {
    localStorage.clear();
     this.router.navigate (['/rama']);
  }  
 































  
  
  //imgUrl: string ="https://cdn.zeebiz.com/sites/default/files/2020/03/31/115350-rohit-sharma-reuters.jpg"
  //isActive:boolean = true;

 //<!---onSave(){
  // console.log('your name is ramakrishna');
 //}
 //onChange(){
   //console.log('you are in onChange method....')
 //}
 //emailaddress: string="ramakrishna@gmail.com";
 //password:string="888695";
 //mobilenumber:number=8886951006;
 
 //nSave(){
 //  console.log(this.emailaddress,this.password,this.mobilenumber);
 //}

}
function logout() {
  throw new Error('Function not implemented.');
}

