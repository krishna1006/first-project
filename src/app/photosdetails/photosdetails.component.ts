import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photosModel } from '../photos/photos.module';
import { photosservice } from '../photos/photos.servics';

@Component({
  selector: 'photosdetails',
  templateUrl: './photosdetails.component.html',
  styleUrls: ['./photosdetails.component.css']
})
export class PhotosdetailsComponent implements OnInit {
  photosModel= new photosModel();
  constructor(private photosservices : photosservice ,private activatedRoute : ActivatedRoute) { }
   
  ngOnInit(): void {
    let id : number = +this.activatedRoute.snapshot.paramMap.get('photosId');
   
     this.photosservices.getById(id).subscribe(response=>{
     this.photosModel = response as photosModel
   });
      
  }
   
}
