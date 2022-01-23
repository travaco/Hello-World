import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
        id: 1,
        name: "Mark Twain",
        gender: "Male",
        contactPreference: "Email",
        email: 'mark@travaco.com',
        dob: new Date('02/14/1971'),
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/marg.png'
    },

    {
      id: 2,
      name: "Sheela Kapoor",
      gender: "Female",
      contactPreference: "Email",
      email: 'sheela@travaco.com',
      dob: new Date('04/11/1988'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/sheela.png'
  },

  {
    id: 3,
    name: "James Bond",
    gender: "Male",
    contactPreference: "Email",
    email: 'james@travaco.com',
    dob: new Date('09/13/1963'),
    department: 'Accounts',
    isActive: true,
    photoPath: 'assets/images/james.png'
}];
  
getEmaployees(): Employee[] {
  return this.listEmployees;
}
}