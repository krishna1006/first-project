
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'input-childoutput',
  templateUrl: './input-childoutput.component.html',
 
})
export class InputChildoutputComponent {

  constructor() { }

 @Output() newItemEvent = new EventEmitter();
     
  
 addNewItem(item : string){
   return this.newItemEvent.emit(item) 
}

}
