import { Component, Input } from "@angular/core";


@Component({
    selector : 'input-child',
    templateUrl : './input-child.component.html'
})

export class inputchildcomponent{
    

  @Input('product') product : string ; 

    
    constructor(){
        
    }
}   