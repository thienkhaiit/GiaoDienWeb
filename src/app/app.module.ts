import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
