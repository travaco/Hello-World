import { Component } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //Property
  title = 'travaco.com';
  name = 'Zaheer Shaikh'

  a = 10;
  b = 15;
  c = 0;
  //Function
 getName()
 {
   return this.name;
 }

 //Object
  obj = {
  name:'Masarrath Shaikh',
  dob: 'April18, 1982',
  age: '40'
 }

 //Array
  arr=['Tom','Dick','Harry'];

  naam = 'Zach';

}
