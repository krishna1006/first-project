import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {




  submit(){

  }

  
  onChange(controlObject : any){
  console.log(controlObject)
}



}
