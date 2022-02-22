import { invoiceModel } from "../models/invoice.models";


export class invoiceservices{

     listinvoices : invoiceModel[]=[

     { id : 1, invoiceNumber  : 'list-1',   Amount : 20000,  CreatedBy    : 'Ramakrishna',    date : '14Feb2022',    items :' LG TV'},
     { id : 2, invoiceNumber  : 'list-2',   Amount : 1000,   CreatedBy    :  'Ramesh',        date : '15Feb2022',    items :'Mobiles'},
     { id : 3, invoiceNumber  : 'list-3',   Amount : 20000,  CreatedBy    :  'kondanna',      date : '16Feb2022',    items : 'lenovo Mobile'}, 
     { id : 4, invoiceNumber  : 'list-4',   Amount : 10000,  CreatedBy    :  'Madevi',        date : '21Feb2022',    items : 'samsumg'},  
    ];
     getinvoice():invoiceModel[]{
         return this.listinvoices;
     }

     getinvoiceById(id:number):invoiceModel{
         let invoicedetails = this.listinvoices.filter(x=>x.id==id)[0];
         return invoicedetails;

     }
}     