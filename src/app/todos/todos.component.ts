import { todosservice } from "../todos.service";
import { Component, OnInit } from "@angular/core";
import { todosModel } from "./todos.model";
import { ToastrService } from 'ngx-toastr';


   @Component({
    selector : 'todos',
    templateUrl: './todos.component.html',
   })

  export class todoscomponent implements OnInit{
       p:number =1;
      title : any ='create a post';

    todosModel = new todosModel();

    lsttodos : todosModel[]=[];

     APIBaseUrl : string ='http://jsonplaceholder.typicode.com/comments';
    constructor(private todosservice:todosservice, private toastr: ToastrService){
       
    }

    ngOnInit():void {
     this.loadDate();
    }

    loadDate(){
     this. todosservice.getAll().subscribe(response=>{
        this.lsttodos = response as todosModel[];
        console.log(this.lsttodos);
    })    

    }

      edittodos(todos: todosModel){

        this.title ='Edit a todos';
        this.todosModel = todos;
     }
       viewtodos(todos: todosModel){
      this.title = "view a todos";
      this.todosModel = todos;
     }
       addtodos(){
         this.title = 'create a todos';
         this.todosModel = new todosModel();
      }  
      savatodosdetails(){
        if(this.todosModel.id){
        this.todosservice.update(this.todosModel.id,this.todosModel).subscribe(response=>{
          console.log(response);
        })
        }
        else{
          this.todosservice.create(this.todosModel).subscribe(response=>{
            console.log(response);
          })
          
         
        }
      }
    }