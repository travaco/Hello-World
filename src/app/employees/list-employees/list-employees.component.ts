import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  // data: any = [];
  //  constructor(private _employee:EmployeeService) {
  // }

  //ngOnInit(): void {
      //this._employee.getData().subscribe(data =>{
       //       this.data = data
      //   })
  //}

  //Example:2
  emp: any = [];
   constructor(private _employee:EmployeeService) {
   }
    
   ngOnInit(): void {
     this.emp = this._employee.getEmployees();
     console.log(this.emp); 
  }

  // Example:3
  // user: any;
  // constructor(private _employee:EmployeeService ) {
    
  // }
  // ngOnInit(): void {
  //   this.user = this._employee.getusers();
  // }


}
