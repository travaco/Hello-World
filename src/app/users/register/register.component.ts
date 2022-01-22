import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showValue = ""; 
  showValue2 = ""; 
  constructor() { }

  ngOnInit(): void {
  }


  getVal(evt: any)
  {
    console.log(evt);
  } 

  getValPrint(evt: any)
  {
    console.log(evt);
    this.showValue = evt;
  } 

  getValPrint2(evt: any)
  {
    console.log(evt);
    this.showValue2 = evt;
  } 

}
