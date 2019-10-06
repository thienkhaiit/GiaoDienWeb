import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hovaten',
  templateUrl: './hovaten.component.html',
  styleUrls: ['./hovaten.component.css']
})
export class HovatenComponent implements OnInit {
  ht={
    ten:null,
    ngay:null,
    gtinh:null,
    diem:0,
    kq:"rot"
  
  }
  constructor() { }

  ngOnInit() {
  }
  ketqua(){
    if(this.ht.diem<5)
      this.ht.kq="rot"
      else
      this.ht.kq="dau"
      return this.ht.kq
  }
}
