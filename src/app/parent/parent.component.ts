import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
   
  products:string[] = ['Angular','React','PowerBI','SAP'];

  
    addItem(item:any){
      this.products.push(item);
    }
}   
     