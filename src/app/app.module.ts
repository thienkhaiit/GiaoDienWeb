import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { alexanderComponent } from './alexander/alexander.component';
@NgModule({
  declarations: [
    AppComponent,
    SinhvienComponent,
    alexanderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',component: SinhvienComponent },
      {path: 'sinhvien', component:SinhvienComponent},
      { path: 'sinhvien/:Id', component: alexanderComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
