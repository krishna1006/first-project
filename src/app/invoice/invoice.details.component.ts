import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { invoiceModel } from "../models/invoice.models";
import { invoiceservices } from "./invoice.services";




@Component({     
    selector : 'invoice.details',
    templateUrl : './invoice.details.component.html',
   
})


export class invoicedetailscomponent {
     invoicedetails : invoiceModel;
     constructor(private route: ActivatedRoute,private invoiceservices: invoiceservices){
         route .paramMap.subscribe((param)=>{
             let id = param.get('id');
             this.invoicedetails = invoiceservices.getinvoiceById(parseInt(id));
         });
     }



}