import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { QuatityComponent } from './quatity/quatity.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    QuatityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '',component: CartComponent },
       {path: 'product', component:ProductComponent},
       {path: 'cart', component:CartComponent},
       {path: 'quatity', component:QuatityComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
