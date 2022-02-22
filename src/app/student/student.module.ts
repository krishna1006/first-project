import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';


const routes: Routes = [
  { path: '', component: StudentComponent }
];

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
