import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
 previewPhote =false;
 dob: Date = new Date(2021, 0, 30);
/*
  employee: Employee = {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      email: null,
      dob: null,
      department: null,
      isActive: null,
      photoPath: null
  };
 */
  constructor() { }

  ngOnInit(): void {
  }

}
