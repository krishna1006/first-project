import { Component } from "@angular/core";
import { photosModel  } from "./photos.module";  
import { photosservice } from "./photos.servics";
import { ToastrService } from 'ngx-toastr';

        @Component({
        selector:'photos',
        templateUrl: './photos.component.html',   
   })
        export class photoscomponent{
        p:number = 1;
       title :string ='create a photos'; 
       photosModel = new photosModel();
       alertMessage:string ='';
       lstphotos:photosModel[]=[];

     ApIbaseUrl : string = 'http://jsonplaceholder.typicode.com/comments'
          toastrservices: any;
     constructor(private photosservice : photosservice,private toastr: ToastrService){
      
    }

      ngOnInit():void{
       this.loadDate();
      }
    loadDate() {
        this.photosservice.getAll().subscribe(response=>{
            this.lstphotos = response as photosModel[];
        } 
             );
            
       }

        addphotos(){

        this.title ='create a post';
        this.photosModel = new photosModel();
       }
    
       Editphotos(photos: photosModel){

       this.title ='Edit a post';
       this.photosModel = photos;
      }
       viewphotos(photos: photosModel){
       this.title = "view a photos";
       this.photosModel = photos;
      }

      deletephotos(id : any){
          if(confirm("are sur to delete your photos")){
        
     this.photosservice.delete(id).subscribe(response=>{
         console.log(response)
      })
          }
     this.toastrservices.error('photos deleted successfully...!')
       }
    
       savephotosdetails(){
        if(this.photosModel.id){
       //update 
        if(confirm("are you save this file")){
       this.photosservice.update(this.photosModel.id, this.photosModel).subscribe(response=>{
           console.log(response);
       })
      }
      this.toastrservices.error( 'photos Updated successfully...!')
       }
       else {
           this.photosservice.create(this.photosModel).subscribe(Response=>{
               console.log(Response)
           })
         }
       }
    }