import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
  laptrinh:any;
  pageTitle='';
  pid;
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
   
]
constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
      this.pid=+para.get('Id');
    });
    this.laptrinh=this.Subjects.find(p=>p.Id===this.pid);
  }

}
