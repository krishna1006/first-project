import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { postModel } from "./post.module";



@Injectable({
    providedIn : 'root'
})

export class postservice{

    APIBaseUrl: string = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private httpclient :HttpClient){

    }
    getAll(){
        return this.httpclient.get(this.APIBaseUrl);
    }
  getById(id:number){
      let url :string  = this.APIBaseUrl+'/'+id;
      return this.httpclient.get(url)
  }
  delete(id:number){
    let url: string = this.APIBaseUrl+'/'+id;
    return this.httpclient.delete(url)
  }
  update(id:number,postModel:postModel){
      let url :string = this.APIBaseUrl+'/'+id;
      return this.httpclient.put(url,postModel)
  }
  create(postModel:postModel){
    return this.httpclient.post(this.APIBaseUrl,postModel);
  }
}