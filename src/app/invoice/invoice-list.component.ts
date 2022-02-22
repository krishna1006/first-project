import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { invoiceModel } from "../models/invoice.models";
import { invoiceservices } from "./invoice.services";

@Component({
    selector:'invoice-list',
    templateUrl : './invoice-list.component.html',
})


    export class invoicelistcomponent{  
    modaltitle:string;
    alertMessage : string;

    listinvoices:invoiceModel[];

    formdate    = new invoiceModel();
    
    invoiceForm = new FormGroup({
     id           : new FormControl('',Validators.required),
    invoiceNumber : new FormControl('',[Validators.required, Validators.minLength(10)]),
    amount        : new FormControl('',Validators.required),
    createdBy     : new FormControl('',Validators.required),
    date          : new FormControl('',Validators.required),
    items         : new FormControl('',Validators.required),



})

constructor(private invoicesservices:invoiceservices){
    
}

ngOnInit():void{
    this.listinvoices= this.invoicesservices.getinvoice();
}


}