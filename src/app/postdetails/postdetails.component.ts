import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postModel } from '../post/post.module';
import { postservice } from '../post/post.service';

@Component({
  selector: 'postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
    postModel = new postModel();
  constructor(private postservices : postservice,private activetedRoute : ActivatedRoute ) { }

  ngOnInit(): void {

    let id :number = +this.activetedRoute .snapshot.paramMap.get('postId');
   

    this.postservices.getById(id).subscribe(response =>{
      this.postModel = response as postModel;
    })
  }

}
