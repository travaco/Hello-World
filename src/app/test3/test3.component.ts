import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {
  color = "";

  constructor() { }

  ngOnInit(): void {
  }

  people: any[] = [
    {
      "name": "Zaheer Shaikh",
      "age": 45
    },
    {
      "name": "Masarrath Shaik",
      "age": 35
    },
    {
      "name": "Sidra Shaikh",
      "age": 15
    },
    
    {
      "name": "Abdulwahab Shaikh",
      "age": 11
    },
    {
      "name": "Abdulmalik Shaikh",
      "age": 10
    }
  
  ]

}
