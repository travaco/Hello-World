import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  disabledBox1 = true;
  disabledBox2 = true;

  showpwd = "password";

  enableBox1()
  {
    this.disabledBox1 = false;
  }

  enableBox2()
  {
    this.disabledBox2 = false;
  }

  showPassword()
  {
    this.showpwd = "text";
  }

  getBtn2()
  {
    return "Hell World"
  }


  myEvent2(evt: any)
  {
    console.log(evt);
  } 

 
}
