import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-alexander',
  templateUrl: './alexander.component.html',
  styleUrls: ['./alexander.component.css']
})
export class alexanderComponent implements OnInit {
sinhvien:any;
pageTitle='';
pid;
students=[
  {
      "Id":1,
      "FirstMidName": "Carson",
      "LastName": "Alexander",
      "EnrollmentDate": "2005-09-01",
      "courses":{
        "CourseID":"1050",
        "Title":"Chemistry",
        "Credits":"3"
      },
      "coursess":{
        "CourseID":"1050",
        "Title":"Macroeconomics",
        "Credits":"3"
      },
      "coursesss":{
        "CourseID":"1050",
        "Title":"Macroeconomics",
        "Credits":"3"
      },
      "enrollments":{
        "StudentID":"8",
        "CourseID":"1050",
        "Grade":"65"
      },
      "enrollmentss":{
        "StudentID":"8",
        "CourseID":"1050",
        "Grade":"67"
      },
      "enrollmentsss":{
        "StudentID":"8",
        "CourseID":"1050",
        "Grade":"66"
      },
  },

  {
    "Id":2,
    "FirstMidName": "Meredith",
    "LastName": "Alonso",
    "EnrollmentDate": "2002-09-01",
    "courses" : {
      "CourseID":"4022",
      "Title":"Python",
      "Credits":"6",
      },
    "coursess" : {
      "CourseID":"4022",
      "Title":"DjAngo",
      "Credits":"6",
    },
    "coursesss":{
      "CourseID":"1050",
      "Title":"Macroeconomics",
      "Credits":"6"
    },
      // {
      // "CourseID1":"4022",
      // "Title1":"Macroeconomics",
      // "Credits1":"3",
      // },
    "enrollments":{
      "StudentID":"7",
      "CourseID":"4022",
      "Grade":"55"
    },
    "enrollmentss":{
      "StudentID":"7",
      "CourseID":"4022",
      "Grade":"60"
    },
    "enrollmentsss":{
      "StudentID":"8",
      "CourseID":"1050",
      "Grade":"66"
    },
    // {
    // "StudentID":"7",
    // "CourseID":"4022",
    // "Grade1":"60"
    // }]
  },

  {
    "Id":3,
    "FirstMidName": "Arturo",
    "LastName": "Anand",
    "EnrollmentDate": "2003-09-01",
    "courses" : {
        "CourseID":"4041",
        "Title":"Macroeconomics",
        "Credits":"3",
      },
      "coursess" : {
        "CourseID":"4041",
        "Title":"Calculus",
        "Credits":"3",
      },
      "coursesss" : {
        "CourseID":"4041",
        "Title":"DjAngo",
        "Credits":"3",
      },
      // {
      //   "CourseID":"4041",
      //   "Title":"Calculus",
      //   "Credits":"3",
      // }],
    "enrollments":{
        "StudentID":"6",
        "CourseID":"1045",
        "Grade":"68"
      },
      "enrollmentss":{
        "StudentID":"6",
        "CourseID":"1045",
        "Grade":"70"
      },
      "enrollmentsss":{
        "StudentID":"6",
        "CourseID":"1045",
        "Grade":"62"
      },
      // {
      //   "StudentID":"6",
      //   "CourseID":"3141",
      //   "Grade":"77"
      // }]
  },

  {
    "Id":4,
    "FirstMidName": "Gytis",
    "LastName": "Barzdukas",
    "EnrollmentDate": "2002-09-01",
    "courses" : {
      "CourseID":"4041",
      "Title":"DjAngo",
      "Credits":"5",
    },
    "coursess" : {
      "CourseID":"4041",
      "Title":"Calculus",
      "Credits":"5",
    },
    "coursesss" : {
      "CourseID":"4041",
      "Title":"DjAngo",
      "Credits":"5",
    },
    // {
    //   "CourseID":"4041",
    //   "Title":"Calculus",
    //   "Credits":"3",
    // }],
  "enrollments":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"55"
    },
    "enrollmentss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"66"
    },
    "enrollmentsss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"33"
    },
  },

  {
    "Id":5,
    "FirstMidName": "Yan",
    "LastName": "Li",
    "EnrollmentDate": "2002-09-01",
    "courses" : {
      "CourseID":"4041",
      "Title":"Literature",
      "Credits":"8",
    },
    "coursess" : {
      "CourseID":"4041",
      "Title":"Calculus",
      "Credits":"8",
    },
    "coursesss" : {
      "CourseID":"4041",
      "Title":"Literature",
      "Credits":"8",
    },
    // {
    //   "CourseID":"4041",
    //   "Title":"Calculus",
    //   "Credits":"3",
    // }],
  "enrollments":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"56"
    },
    "enrollmentss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"68"
    },
    "enrollmentsss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"98"
    },
  },

  {
    "Id":6,
    "FirstMidName": "Meredith",
    "LastName": "Alonso",
    "EnrollmentDate": "2001-09-01",
    "courses" : {
      "CourseID":"4041",
      "Title":"Composition",
      "Credits":"6",
    },
    "coursess" : {
      "CourseID":"4041",
      "Title":"Calculus",
      "Credits":"6",
    },
    "coursesss" : {
      "CourseID":"4041",
      "Title":"Cals",
      "Credits":"6",
    },
    // {
    //   "CourseID":"4041",
    //   "Title":"Calculus",
    //   "Credits":"3",
    // }],
  "enrollments":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"45"
    },
    "enrollmentss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"60"
    },
    "enrollmentsss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"74"
    },
  },

  {
    "Id":7,
    "FirstMidName": "Laura",
    "LastName": "Norman",
    "EnrollmentDate": "2003-09-01",
    "courses" : {
      "CourseID":"4041",
      "Title":"Python",
      "Credits":"4",
    },
    "coursess" : {
      "CourseID":"4041",
      "Title":"Calculus",
      "Credits":"4",
    },
    "coursesss" : {
      "CourseID":"4041",
      "Title":"Cals",
      "Credits":"4",
    },
    // {
    //   "CourseID":"4041",
    //   "Title":"Calculus",
    //   "Credits":"3",
    // }],
  "enrollments":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"50"
    },
    "enrollmentss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"98"
    },
    "enrollmentsss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"62"
    },
    // {
    //   "StudentID":"2",
    // "CourseID":"3141",
    // "Grade":"65"
    // },
    // {
    //   "StudentID":"2",
    // "CourseID":"2021",
    // "Grade":"63"
    // }]
  },

  {
    "Id":8,
    "FirstMidName": "Nino",
    "LastName": "Olivetto",
    "EnrollmentDate": "2005-09-01",
    "courses" : {
      "CourseID":"4041",
      "Title":"Chemistry",
      "Credits":"7",
    },
    "coursess" : {
      "CourseID":"4041",
      "Title":"Calculus",
      "Credits":"7",
    },
    "coursesss" : {
      "CourseID":"4041",
      "Title":"Cals",
      "Credits":"7",
    },
    // {
    //   "CourseID":"4041",
    //   "Title":"Calculus",
    //   "Credits":"3",
    // }],
  "enrollments":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"65"
    },
    "enrollmentss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"70"
    },
    "enrollmentsss":{
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"62"
    },
    //   {
    //     "StudentID":"1",
    //     "CourseID":"4022",
    //     "Grade":"45"
    //   },
    //   {
    //     "StudentID":"1",
    //     "CourseID":"4041",
    //     "Grade":"55"
    // }]
  },
];

// courses = [
//   {
//     "CourseID":"1050",
//     "Title":"Chemistry",
//     "Credits":"3"
//   },
//   {
//     "CourseID":"4022",
//     "Title":"Python",
//     "Credits":"3",
//   },
//   {
//     "CourseID":"4041",
//     "Title":"Macroeconomics",
//     "Credits":"3",
//   },
//   {
//     "CourseID":"1045",
//     "Title":"Calculus",
//     "Credits":"4",
//   },
//   {
//     "CourseID":"3141",
//     "Title":"DjAngo",
//     "Credits":"4",},
//   {
//     "CourseID":"2021",
//     "Title":"Composition",
//     "Credits":"3",
//   },
//   {
//     "CourseID":"2042",
//     "Title":"Literature",
//     "Credits":"4",
//   }
//   ];
  enrollments = [
    {
      "StudentID":"1",
      "CourseID":"1050",
      "Grade":"A"
    },
    {
    "StudentID":"1",
    "CourseID":"4022",
    "Grade":"C"
  },
    {
      "StudentID":"1",
    "CourseID":"4041",
    "Grade":"B"
  },
    {
      "StudentID":"2",
      "CourseID":"1045",
      "Grade":"B"
    },
    {
      "StudentID":"2",
    "CourseID":"3141",
    "Grade":"F"
  },
    {
      "StudentID":"2",
    "CourseID":"2021",
    "Grade":"F"
  },
    {"StudentID":"3",
    "CourseID":"1050",
    "Grade":"B"
  },
    {
      "StudentID":"4",
    "CourseID":"1050",
    "Grade":"B"
  },
    {
      "StudentID":"4",
      "CourseID":"4022",
      "Grade":"F"
    },
    {
      "StudentID":"5",
      "CourseID":"4041",
      "Grade":"C"
    },
    {
      "StudentID":"6",
      "CourseID":"1045",
      "Grade":"B"
    },
    {
      "StudentID":"6",
      "CourseID":"3141",
      "Grade":"A"
    },
    ];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
    /*xét id=id load dử liệu*/
    this.route.paramMap.subscribe(para=>{
      this.pid=+para.get('Id');
    });
    this.sinhvien=this.students.find(p=>p.Id===this.pid);
    // this.pageTitle=this.sinhvien.productName;
  }
}
