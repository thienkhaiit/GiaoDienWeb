import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CommentComponent } from './comment/comment.component';
import { PasswordretrievalComponent } from './passwordretrieval/passwordretrieval.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebComponent,
    IntroduceComponent,
    CommentComponent,
    PasswordretrievalComponent,
    ChangepasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '',component: IntroduceComponent   },
      {path: 'home', component:HomeComponent},
      { path: 'password', component: PasswordretrievalComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'comment', component: CommentComponent },
      { path: 'web/:Id', component: WebComponent },
      // { path: 'web', component: WebComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
