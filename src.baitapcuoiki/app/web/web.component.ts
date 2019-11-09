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
 //load dử liệu từ file json
  ngOnInit() {
    this.route.paramMap.subscribe(para => {
        const Id = para.get('mid');
        this.quize.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
        this.dongho();
      }
     
      );
  }

  // phân trang
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
  //tạo thời gian làm bài
  dongho() {
		var minute = 60;
		var second = 0;

		var clear = setInterval(function() {
			if (minute == 0 && second == 0) {
				console.log(this.outOfTime)
				document.getElementById('dongho').style.display = 'none'
				clearInterval(clear);
				alert('Het gio lam bai');
			}
			else {
				second -= 1
				if (second < 0) {
					minute -= 1;
					second = 59;
				}
				document.getElementById('dongho').innerHTML = minute + 'P: ' + second + 's';
			}
		}, 1000)
  }
  //đếm câu hỏi
  socauhoi(){
    return this.quiz.length;
  }
}
