
import { Component } from "@angular/core";
import { postModel} from "./post.module";
import { postservice } from "./post.service";

@Component({
    selector : 'post',
    templateUrl : 'post.component.html',
})

    export class PostComponent  {
    title : any ='create a post';
     p : number = 1;
    postModel = new postModel();   

    lstpost : postModel[]=[];

   APIBaseUrl: string = 'http://jsonplaceholder.typicode.com/posts'
     constructor(private postservice : postservice,) {

    this.postservice.getAll().subscribe(response =>{
       this.lstpost=response as postModel[];
        console.log(this.lstpost);

    })

}
addpost(){  
    this.title='create a post';
    this.postModel = new postModel();
}
Editpost(post : postModel){
    this.title ='edit a post';
    this.postModel =post;
}
viewpost(post:postModel){
    this.title ='View a post';
    this.postModel=post;
}
deletephotos(id : number){
   
    this.postservice.delete(id).subscribe(response=>{
        console.log(response)
    })

      }
savepostdetails(){
    if(this.postModel.id){
        this.postservice.update(this.postModel.id,this.postModel).subscribe(response =>{
            console.log(response);
        })
    }
    else{
        this.postservice.create(this.postModel).subscribe(response=>{
            console.log(response)
        })
    }  
   }

} 




    