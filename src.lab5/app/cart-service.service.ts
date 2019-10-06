import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
item=[];
AddToCart(product){
  this.item.push(product);
}
getitem(){
return this.item;
}
clear(){
this.item=[];
return this.item;
}
  constructor() { }
}
