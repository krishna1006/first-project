import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { commentModel } from "./comment.model";

@Component({
    selector : 'comment',
    templateUrl : 'comment.component.html',
})
 
export class commentcomponent{
    p:number =1;
    commentModel = new commentModel();

      title : any ='Create a Comment'
      
    lstcomment:commentModel[]=[];

    APIbaseUrl : string ='http://jsonplaceholder.typicode.com/photos'
   constructor(private  httpclient : HttpClient){
    httpclient.get(this.APIbaseUrl).subscribe(response =>{
        this.lstcomment=response as commentModel[];
        console.log(this.lstcomment)
    })
   }
  
     editcomment(comment : commentModel){
      this.title='Edit a comment';
      this.commentModel = new commentModel();
  }  
     addcomment(comment : commentModel){
      this.title = 'Add a Comment';
      this.commentModel = new commentModel();
  }
     viewcomment(comment : commentModel){
      this.title = 'View a Comment';
      this.commentModel = new commentModel();
  }
}
   
