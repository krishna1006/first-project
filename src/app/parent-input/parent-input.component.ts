import { Component } from "@angular/core";


@Component({
    selector : 'input-parent',
    templateUrl : './parent-input.component.html',
})



export class parentinputcomponent{

    classlist : string[] =  ['vivo','LG','OPPO','MI','lenovo'];

      constructor(){}


      additem(item:any){
          this.classlist.push(item)
      }
    
}