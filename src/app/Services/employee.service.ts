import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient){
  }
   //Example:1
   getData() {
    let url='https://jsonplaceholder.typicode.com/todos/';  
    return this.http.get(url);   
   }   

  //Example:2 
  private listEmployees: Employee[] = [
    {
        id: 1,
        name: "Mark Twain",
        gender: "Male",
        phone: "212-679-3855",
        email: 'mark@travaco.com',
        dob: new Date('02/14/1971'),
        department: 'IT',
        isActive: true,
        photoPath: '/assets/images/Mark.png'
    },

    {
      id: 2,
      name: "Sheela Kapoor",
      gender: "Female",
      phone: "917-294-8940",
      email: 'sheela@travaco.com',
      dob: new Date('04/11/1988'),
      department: 'HR',
      isActive: true,
      photoPath: '/assets/images/Sheela.png'
  },

  {
    id: 3,
    name: "James Bond",
    gender: "Male",
    phone: "917-770-0441",
    email: 'james@travaco.com',
    dob: new Date('09/13/1963'),
    department: 'Accounts',
    isActive: true,
    photoPath: "/assets/images/James.png"
  }];
   
  getEmployees(): Employee[] {
  return this.listEmployees;
  }

  //Example:3
  getusers() {
    const users = [
     {userId:10, media: 'YouTube'},
     {userId:11, media: 'Facebook'},
     {userId:12, media: 'Twitter'},
     {userId:13, media: 'Instagram'},
     {userId:14, media: 'LinkedIn'},
     {userId:15, media: 'Skype'}
    ];
       
     return users;
   }

}