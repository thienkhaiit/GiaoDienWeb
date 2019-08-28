import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pageTitle="danh sách sản phẩm";
  isShow=true;
  listproduct=[
    {
      "productId": 1,
      "LastName": "Tuấn",
      "FirstName": "Mạc",
      "EMail": "tuan@gmail.com",
      "Action": "Action",
    },
    {
      "productId": 2,
      "LastName": "Vũ",
      "FirstName": "Tạ",
      "EMail": "vu@gmail.com",
      "Action": "Action",
    },
    {
      "productId": 3,
      "LastName": "Phương",
      "FirstName": "Võ",
      "EMail": "phuong@gmail.com",
      "Action": "Action",
    },
    {
      "productId": 4,
      "LastName": "Duy",
      "FirstName": "GMG-0042",
      "EMail": "Duy@gmail.com",
      "Action": "Action",
    },
    {
        "productId": 5,
        "LastName": "Thái",
        "FirstName": "Nguyễn",
        "EMail": "Thai@gmail.com",
        "Action": "Action",
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  

}
