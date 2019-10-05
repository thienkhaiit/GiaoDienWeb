import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    /*load dử liệu */
laptrinh:any;
pageTitle='';
pid;
/*phân trang môn hc */
currentPage=1;
  itemsPerPage=4;
  totalPage:number;
  /*tới */
  next(){
    if(this.currentPage < this.totalPage)
      this.currentPage++
  }
  /*luôi */
  Previous(){
    if( this.totalPage*this.currentPage)
      this.currentPage--
  }
  /*cuối trang */
  LastPege(){
    this.currentPage=this.totalPage
  }
  /*đầu trang */
  top(){
    this.currentPage=1
  }
  /*phân trang menu */
current=1;
itemsPer=10;
totalPage1:number;
/*tới */
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
  Subjects=[
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "ADAV.jpg",
        "url":"android"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "WEBU.jpg",
        "url":"web"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "DBBS.png",
        "url":"csdl"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "DBAV.png",
        "url":"sqlsever"
    },
   
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "ADBS.jpg",
        "url":"androidcb"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "CLCO.jpg",
        "url":"dammay"
    },
    
  
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "ASNE.png",
        "url":"asp"
    },
   
    
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "GAME.png",
        "url":"game2d"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "HTCS.jpg",
        "url":"htnl5css3"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "INMA.jpg",
        "url":"marketing"
    },
    
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "JABS.png",
        "url":"java"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "JSPR.png",
        "url":"javascript"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "ADUI.jpg",
        "url":"tkgdandroid"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "LAYO.jpg",
        "url":"layout"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "MOWE.png",
        "url":"tkwdidong"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "PHPP.png",
        "url":"php"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "PMAG.jpg",
        "url":"agile"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "VBPR.png",
        "url":"vbnet"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và ứng dụng Android",
        "Logo": "ADTE.jpg",
        "url":"kiemthuandroid"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "JAAV.png",
        "url":"javancao"
    },
]
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.totalPage=Math.ceil(this.Subjects.length/this.itemsPerPage);
      /*xét id=id load dử liệu*/
    this.route.paramMap.subscribe(para=>{
        this.pid=+para.get('Id');
      });
      this.laptrinh=this.Subjects.find(p=>p.Id===this.pid);
      // this.pageTitle=this.sinhvien.productName;
    
  }
  
   /*sấp xếp theo tên */
//   OrderBy(strOrder:string){
//     this.OrderName=strOrder;
//   }
}
