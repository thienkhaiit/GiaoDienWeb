import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { alexanderComponent } from './alexander/alexander.component';
import { HcnComponent } from './hcn/hcn.component';
import { FormsModule}from'@angular/forms'
import { from } from 'rxjs';
import { HovatenComponent } from './hovaten/hovaten.component';
import { TienthuongComponent } from './tienthuong/tienthuong.component';
@NgModule({
  declarations: [
    AppComponent,
    SinhvienComponent,
    alexanderComponent,
    HcnComponent,
    HovatenComponent,
    TienthuongComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',component: SinhvienComponent },
      {path: 'sinhvien', component:SinhvienComponent},
      {path: 'hcn', component:HcnComponent},
      {path: 'tienthuong', component:TienthuongComponent},
      {path: 'hovaten', component:HovatenComponent},
      { path: 'sinhvien/:Id', component: alexanderComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
