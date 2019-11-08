import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InterfaceService } from '../interface.service';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
constructor(private route:ActivatedRoute,private quize:InterfaceService) { }

public Subjects:any;
Subject:any;
pid;
ngOnInit() {
  this.quize.getAllSubjects().subscribe(data => this.Subjects = data);
  this.Subject= this.Subjects.find(p=>p.Id=== this.pid); 
  console.log(this.Subject)
}

}
