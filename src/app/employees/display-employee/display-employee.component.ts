import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  constructor() { }

  ngOnInit(): void {
  }

}