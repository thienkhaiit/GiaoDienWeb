import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Student } from '../login/student';
import { InterfaceService } from '../interface.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
    students: Student[];
    listUsers = [];
    studentLocal = [];
    _submit = false;
    checkbox = true;
    check = false;;
    id: number = 4;
    username: string = "";
    password: string = "";
    repass: string = "";
    email: string = "";
    gender: string = "";
    schoolfee: number =0;
   
  
    constructor(private quize: InterfaceService) { }
    public quiz:any;
    ngOnInit() {
      this.getUsers();
      this.studentLocal = JSON.parse(localStorage.getItem('students'));
    }
    getUsers() {
      this.quiz.getAllSubjects().subscribe(data => this.quiz = data);
    }
  
    onSubmit(formUser: NgForm) {
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
  
      for (var i = 0; i < this.students.length; i++) {
        if (this.students[i].username == formUser.value.username) {
          count1++;
        }
      }
      for (var i = 0; i < this.listUsers.length; i++) {
        if (this.listUsers[i].username == formUser.value.username) {
          count2++;
        }
      }
      for (var i = 0; i < this.studentLocal.length; i++) {
        if (this.studentLocal[i].username == formUser.value.username) {
          count3++;
        }
      }
  
      if (count1 == 0 && count2 == 0 && count3 == 0) {
        this._submit = true;
        this.listUsers.push({
          id: this.id++,
          username: this.username,
          password: this.password,
         
          email: this.email,
          gender: this.gender,
          
          schoolfee: this.schoolfee,
         
        });
        this.quiz.Student(
          this.username, this.password, this.email,
        this.gender, this.schoolfee,
        );
      }
      else {
        alert('Tên Đăng Nhập Đã Tồn Tại')
      }
    }
  
    onSM(formUser: NgForm) {
      if (formUser.value.repass !== formUser.value.password) {
        alert('Mật Khẩu Phải Giống Nhau')
        return false;
      }
    }
  
    onReset(formUser: NgForm) {
      formUser.reset();
    }

}