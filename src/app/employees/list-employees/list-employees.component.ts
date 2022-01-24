import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  data: any =[];
   constructor(private employee:EmployeeService) {
    this.employee.getData().subscribe(data =>{
        console.log(data);
        this.data = data
    })
     
  }

  ngOnInit(): void {
  }

}
