import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartServiceService} from '../cart-service.service';
@Component({
  selector: 'app-productdetaill',
  templateUrl: './productdetaill.component.html',
  styleUrls: ['./productdetaill.component.css']
})
export class ProductdetaillComponent implements OnInit {
product:any;
pageTitle='';
pid;
listproduct=[
  {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "choi.jpg"
  },
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "xe-gom-rac-ton.gif"
  },
  {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "buasat.jpg"
  },
  {
      "productId": 4,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "cuago.jpg"
  },
  {
      "productId": 5,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "dochoidientu.jpg"
  },
];
  constructor(private route:ActivatedRoute,private cart:CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.pid=+para.get('productId');
    });
    this.product=this.listproduct.find(p=>p.productId===this.pid);
    this.pageTitle=this.product.productName;
  }
  AddToCart(){
    let appProduct=Object.assign(this.product,{'quatity':1});
    this.cart.AddToCart(this.product);
  }
  onBack(){
    window.history.back();
  }
}
