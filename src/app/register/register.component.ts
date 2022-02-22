import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title  = 'Register Here';
  
  email : string ='';
  mobile: any;
  password :number;
     constructor() { }
  
  login(){
    console.log(this.email,this.password,this.mobile)
  }

  ngOnInit(): void {
  }

}
