import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InterfaceService } from '../interface.service';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  public quiz:any;
  pageTitle='';
  pid;
  constructor(private route:ActivatedRoute,private quize:InterfaceService) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(para => {
        const Id = para.get('mid');
        this.quize.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
       
      }
      );
  }
  currentPage=1;
  itemsPerPage=1;
  totalPage:number;
  next(){
    this.totalPage=Math.ceil(this.quiz.length/this.itemsPerPage);
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
}
