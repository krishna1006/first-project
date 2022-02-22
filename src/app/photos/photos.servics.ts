import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { photosModel } from "./photos.module";


@Injectable({
    providedIn:'root'
})

export class photosservice{

    ApIbaseUrl : string = 'http://jsonplaceholder.typicode.com/comments'
    constructor(private httpclient: HttpClient){
      
    }
    getAll(){
        return this.httpclient .get(this.ApIbaseUrl);
    }
    getById(id:number){
        let url :string =this.ApIbaseUrl+'/'+id;
         return this.httpclient.get(url)
    }
    delete(id:number){
        let url :string = this.ApIbaseUrl+'/'+id;
        return this.httpclient.delete(url);
    }
    update(id:number,photosModel:photosModel ){
        let url :string = this.ApIbaseUrl+'/'+id;
        return this.httpclient.post(this.ApIbaseUrl,photosModel)
    }
    create(photosModel:photosModel){
        return this.httpclient.post(this.ApIbaseUrl,photosModel)
    }
}