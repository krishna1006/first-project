import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title : 'login'
  router: any;
  email: string ='';
  password: string='';
       
  constructor(private toasterservices:ToastrService ){
      
  }
  
login(){

  console.log(this.email,this.password);

  let userInfo = [{ email:'rama@gmail.com',password:'00000',isAdmin :false },{email:'krishna@gmail.com',password : '11111',isAdmin:'true'}];
  let filterUser = userInfo.filter( x=>x.email === this.email && x.password==this.password );
  
  if(filterUser && filterUser.length> 0 ){
    localStorage.setItem('isAuthenticated','True');
  
    if(filterUser[0].isAdmin){
      localStorage.setItem('isAdmin','True');
    }
    this.toasterservices.success('login success');
  }
  else{
    this.toasterservices.error('invaild user');
    
  }
  
  }
  onChange(controlObject : any){
    console.log(controlObject)
  }
}

































/*
loginForm = new FormGroup({
  emailAddress : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@gmil.com')]),
  password : new FormControl('',[Validators.required,])

});
constructor(private router  : Router){
//calling form home page 
}
login(){
this.router.navigate(['home'])
}
get email(){
 return this.loginForm.get('emailAddress');
}
get password(){
  return this.loginForm.get('password');
}
}

----*/
