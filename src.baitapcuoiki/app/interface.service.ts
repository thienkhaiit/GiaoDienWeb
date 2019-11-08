import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor( private http:HttpClient) { }
  getAllSubjects(){
    return this.http.get('/assets/db/Subjects.json');
  }
  getAlldetailSubject(Id: string) {
    return this.http.get(`/assets/db/` + Id + `.json`);
  }

}
