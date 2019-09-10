import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetaillComponent } from './productdetaill/productdetaill.component';
import { CartComponent } from './cart/cart.component';
import { Cart1Component } from './cart1/cart1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductdetaillComponent,
    CartComponent,
    Cart1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',component: ProductComponent },
      {path: 'product', component:ProductComponent},
      {path: 'cart1', component:Cart1Component},
      {path: 'cart', component:CartComponent},
      { path: 'product/:productId', component: ProductdetaillComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
