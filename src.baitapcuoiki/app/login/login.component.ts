import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
 
})
export class LoginComponent implements OnInit {
  username =null;
	password =null;
	//dang nhap
	showCheckall: boolean = false;
	showCheck: boolean = false;
	showCheck1: boolean = false;
	showCheckpass: boolean = false;
	//dang ký
	showChecksu1: boolean = false;
	showChecksu2: boolean = false;
	showChecksu3: boolean = false;
	showChecksu4: boolean = false;

  
  constructor( private http: HttpClient,private router: Router) { }
  configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
	students: any;
	getconfig() {
	  return this.http.get(this.configUrl);
	}

  ngOnInit() {
    this.getconfig().subscribe(data => {
      this.students = data;
      console.log(data);
    })
  }
  check() {

		this.students.forEach(element => {
		
		  if (this.username == null && this.password == null )                                  
		  { 
			return this.showCheckall=true; 
		  } 
		  if (this.password == null )                                  
		  { 
			this.showCheckpass=true;
			return this.showCheckall=false; 
		  } 
		  if (element.username == this.username && element.password == this.password) {
			this.router.navigate(["/@"])
			alert('Wellcome '+ element.fullname)
			return true;
		  }
		  
     
		 
		});
	  }






  
}