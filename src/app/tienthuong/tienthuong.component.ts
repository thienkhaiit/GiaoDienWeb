import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienthuong',
  templateUrl: './tienthuong.component.html',
  styleUrls: ['./tienthuong.component.css']
})
export class TienthuongComponent implements OnInit {
list=[
  {
    age:"dưới 25 tuoi",
    rate:0.07
  },
  {
    age:"dưới 25-40 tuoi",
    rate:0.1
  },
  {
    age:"trên 40 tuoi",
    rate:0.15
  },
]
  tt={
    ten:null,
    luong:100000,
    gtinh:'nam',
    rate:null,  
  }
  constructor() { }

  ngOnInit() {
  }
  tienthuong(){
    let s=0
    if(this.tt.gtinh=="nu")
     s=this.tt.luong*this.tt.rate+100000
     else
     s=this.tt.luong*this.tt.rate
    return s
  }
}
