import { TeachersObj } from './../core/teachersObj';

import { TeachersService } from './../core/teachers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
activeHome:string="";
activeTeacher:string="active";
activeCourse:string="";
teachers: TeachersObj[];
  constructor( private route: ActivatedRoute, private teacherService : TeachersService) { }



  ngOnInit() {
    this.teachers = this.teacherService.listRecord();
  }
 
  deleteRecord(id: string){
     this.teacherService.deleteRecord(id);
  }

}
