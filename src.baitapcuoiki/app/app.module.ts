import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { RegistrationComponent } from './registration/registration.component';
import { WebComponent } from './web/web.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CommentComponent } from './comment/comment.component';
import { AndroidComponent } from './android/android.component';
import { CsdlComponent } from './csdl/csdl.component';
import { SqlseverComponent } from './sqlsever/sqlsever.component';
import { AspComponent } from './asp/asp.component';
import { Game2dComponent } from './game2d/game2d.component';
import { DammayComponent } from './dammay/dammay.component';
import { AndroidcbComponent } from './androidcb/androidcb.component';
import { Htnl5css3Component } from './htnl5css3/htnl5css3.component';
import { MarketingComponent } from './marketing/marketing.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JavaComponent } from './java/java.component';
import { LayoutComponent } from './layout/layout.component';
import { PhpComponent } from './php/php.component';
import { TkgdandroidComponent } from './tkgdandroid/tkgdandroid.component';
import { TkwdidongComponent } from './tkwdidong/tkwdidong.component';
import { VbnetComponent } from './vbnet/vbnet.component';
import { JavancaoComponent } from './javancao/javancao.component';
import { KiemthuandroidComponent } from './kiemthuandroid/kiemthuandroid.component';
import { AgileComponent } from './agile/agile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent,
    // RegistrationComponent,
    WebComponent,
    IntroduceComponent,
    CommentComponent,

    AndroidComponent,
    CsdlComponent,
    SqlseverComponent,
    AspComponent,
    Game2dComponent,
    DammayComponent,
    AndroidcbComponent,

    Htnl5css3Component,
    MarketingComponent,
    JavascriptComponent,
    JavaComponent,
    LayoutComponent,
    PhpComponent,
    TkgdandroidComponent,
    TkwdidongComponent,
    VbnetComponent,
    JavancaoComponent,
    KiemthuandroidComponent,
    AgileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '',component: HomeComponent   },
      {path: 'home', component:HomeComponent},
      // { path: 'login', component: LoginComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'comment', component: CommentComponent },
      // { path: 'registration', component: RegistrationComponent },
      { path: 'web', component: WebComponent },
      { path: 'android', component: AndroidComponent },
      { path: 'csdl', component: CsdlComponent },
      { path: 'sqlsever', component: SqlseverComponent },
      { path: 'game2d', component: Game2dComponent },
      { path: 'dammay', component: DammayComponent },
      { path: 'asp', component: AspComponent },
      { path: 'androidcb', component: AndroidcbComponent },
      { path: 'htnl5css3', component: Htnl5css3Component },
      { path: 'marketing', component: MarketingComponent },
      { path: 'javascript', component: JavascriptComponent },
      { path: 'java', component: JavaComponent },
      { path: 'layout', component: LayoutComponent },
      { path: 'php', component: PhpComponent },
      { path: 'tkgdandroid', component: TkgdandroidComponent },
      { path: 'tkwdidong', component: TkwdidongComponent },
      { path: 'vbnet', component: VbnetComponent },
      { path: 'javancao', component: JavancaoComponent },
      { path: 'kiemthuandroid', component: KiemthuandroidComponent },
      { path: 'agile', component: AgileComponent },
      // { path: '**', redirectTo: '', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
