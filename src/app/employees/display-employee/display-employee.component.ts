import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from 'src/app/users/user/user.component';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  //@Input() employee: Employee;
  emp: any;
  constructor(private _users: UsersService ) {}

  ngOnInit(): void {
     this._users.getUsers().subscribe(data => {
       this.emp = data;
    })
  }

}
