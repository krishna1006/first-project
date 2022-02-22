import { Component,EventEmitter,Output, } from '@angular/core';


@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent  {


 @Output() newItemEvent = new EventEmitter ();

 constructor(){}

 addNewItem(item:string){
   return this.newItemEvent.emit(item);
 }
 
}
   