import { Component, OnInit } from '@angular/core';
import {GuitarsService} from '../DAL/guitars.service';

@Component({
  selector: 'app-card-guitar',
  templateUrl: './card-guitar.component.html',
  styleUrls: ['./card-guitar.component.css']
})
export class CardGuitarComponent implements OnInit {
guitars:any;
  constructor(private _guitar:GuitarsService) { }

  ngOnInit() {
    this.guitars=this._guitar.getItems();
    console.log(this.guitars);
  }
  delete(guitars){
    window.alert('Your product has been added to the cart!');
    this._guitar.addToCart(this.guitars);
  }
}
