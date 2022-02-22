import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { invoicelistcomponent } from "./invoice-list.component";
import { invoicedetailscomponent } from "./invoice.details.component";
import { invoiceservices } from "./invoice.services";

const routes : Routes =[

{path : 'invoice/:id',component : invoicedetailscomponent},
{path : 'invoice',component :invoicelistcomponent}


]    

@NgModule({
    declarations:[
    invoicelistcomponent,
    invoicedetailscomponent
    ],

imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
],
providers:[invoiceservices],
bootstrap : [],

})


export class invoicemodule{

}
   