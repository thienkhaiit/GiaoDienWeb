import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InterfaceService } from '../interface.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentPage=1;
  itemsPerPage=4;
  totalPage:number;
  next(){
    this.totalPage=Math.ceil(this.Subjects.length/this.itemsPerPage);
    if(this.currentPage < this.totalPage)
      this.currentPage++
  }
  Previous(){
    if( this.totalPage*this.currentPage)
      this.currentPage--
  }
  LastPege(){
    this.currentPage=this.totalPage
  }
  top(){
    this.currentPage=1
  }
current=1;
itemsPer=10;
totalPage1:number;
next1(){
    this.totalPage1=Math.ceil(this.Subjects.length/this.itemsPer);
    if(this.current < this.totalPage1)
      this.current++
  }
  /*luôi */
  Previous1(){
    if( this.totalPage1*this.current)
      this.current--
  }
//   OrderName="Name";
 
  constructor(private route:ActivatedRoute, private quize:InterfaceService ) { }
  public Subjects:any;
  Subject:any;
  pid;
  ngOnInit() {
    this.quize.getAllSubjects().subscribe(data => this.Subjects = data);
    this.Subject= this.Subjects.find(p=>p.Id=== this.pid); 
    console.log(this.Subject)
  }
  
}
