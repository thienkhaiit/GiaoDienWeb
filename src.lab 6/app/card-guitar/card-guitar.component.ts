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
  
  TongTien()
  {
    let s=0;
    this.guitars.forEach(function(item)
    {
      s=s+item.price*item.sl;
    })
    return s;
  }
  Tang(cid)
  {
    for(let i=0;i<this.guitars.length;i++)
    {
      if(this.guitars[i].id===cid){
        this.guitars[i].sl++;
      }
    }
  }
  Tu(cid)
  {
    for(let i=0;i<this.guitars.length;i++)
    {
      if(this.guitars[i].id===cid && this.guitars[i].sl > 0){
        this.guitars[i].sl--
      }
    }
  }
  delete(cid) {
    var a = confirm ('Do you want to delete this product?');
    if ( a == true){
      const index= this.guitars.findIndex( word => word.Id === cid);
      this.guitars.splice(index , 1);
    } else {
      return false;
  }
}}
