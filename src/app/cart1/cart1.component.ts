import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  pageTitle="danh sách sản phẩm";
  isShow=true;
  listproduct=[
    {
        "productId": 1,
        "productName": "laptop",
        "price": 19.5,
        "imageUrl": "anhloptop.jpg",
        "sl":0
    },
    {
        "productId": 2,
        "productName": "iphone",
        "price": 32.000,
        "imageUrl": "dienthoai.jpg",
        "sl":0
    },
    {
        "productId": 3,
        "productName": "screens samsum",
        "price": 200,
        "imageUrl": "manghinhmaytinh.jpg",
        "sl":0
    },
    {
        "productId": 4,
        "productName": "headphone",
        "price": 150,
        "imageUrl": "taynghe.jpg",
        "sl":0
    },
]
  constructor() { }

  ngOnInit() {
  }
  anhien()
  {
    this.isShow=!this.isShow;
  }
  TongTien()
  {
    let s=0;
    // for(let i=0;i<this.listproduct.length;i++)
    // {
    //   s=s+this.listproduct[i].price;
    // }
    this.listproduct.forEach(function(item)
    {
      s=s+item.price*item.sl;
    })
    return s;
  }
  Tang(Id)
  {
    for(let i=0;i<this.listproduct.length;i++)
    {
      if(this.listproduct[i].productId===Id){
        this.listproduct[i].sl++;
      }
    }
  }
  Tu(Id)
  {
    for(let i=0;i<this.listproduct.length;i++)
    {
      if(this.listproduct[i].productId===Id){
        this.listproduct[i].sl--
      }
    }
  }


}
