
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ramacomponent } from './rama/rama.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule} from '@angular/common/http';
import { photoscomponent } from './photos/photos.component';
import { photosdetailscomponent } from './photos/photos-details.component';
import { todoscomponent } from './todos/todos.component';
import { commentcomponent } from './comment/comment.component';
import { usercomponent } from './user/user.component';
import { postservice } from './post/post.service';
import { photosservice } from './photos/photos.servics';
import { commonservice } from './common.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { invoicemodule } from './invoice/invoice.module';
import { inputchildcomponent } from './input-child/input-child.component';
import { parentinputcomponent } from './parent-input/parent-input.component';
import { InputChildoutputComponent } from './input-childoutput/input-childoutput.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { Authguard } from './auth.guard.services';
import { AdminAuthguard } from './adminauthguard.services';
import { RegisterComponent } from './register/register.component';



 
   
 
const routes =[
  {path : '' , component :ramacomponent },
  {path  :'rama',component: ramacomponent},
  {path : 'login',component : LoginComponent},
  {path :'home', component : ramacomponent},
  {path : 'post/:postId',component : PostdetailsComponent,canActivate :[Authguard] },
  {path :'post',component : PostComponent,canActivate :[Authguard]},
  {path : 'photos/:photosId',component : photosdetailscomponent},
  {path : 'photos',component : photoscomponent},
  {path : 'todos' , component : todoscomponent,canActivate :[Authguard]},
  {path : 'comment' ,component : commentcomponent},
  {path : 'user', component : usercomponent,canActivate :[Authguard,AdminAuthguard]},
  {path : 'parent',component : ParentComponent},
  {path : 'contactform',component : ContactFormComponent},
  {path :'parentinput',component : parentinputcomponent},
  {path : 'unAuthorized',component : UnAuthorizedComponent},
  {path : 'register',component : RegisterComponent},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  {path : '**',component : ForgotPasswordComponent},


];





 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ramacomponent,
    ChildInputComponent,
    ParentComponent,
    ChildOutputComponent,
    InputFormatDirective,
    ContactFormComponent,
    PostComponent, 
    photoscomponent,
    photosdetailscomponent,
    todoscomponent,
    commentcomponent,
    usercomponent,
    ForgotPasswordComponent,
    PostdetailsComponent,
    inputchildcomponent,
    parentinputcomponent,
    InputChildoutputComponent,
    UnAuthorizedComponent,
    RegisterComponent


   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    invoicemodule


     
  ],
  providers: [,postservice,photosservice,commonservice, Authguard,AdminAuthguard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
