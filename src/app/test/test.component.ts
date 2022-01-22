import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //property
  name = 'Masarrath Shaikh';
 
 //function
  getName()
  {
    return "SIDRA";
    //console.log(this.name);
  }
  
  getName1()
  {
    alert("Miya Bhai")
  }
   
  getName2()
  {
    return this.name;
    console.log();
  }
  
  getName3()
  {
    alert("Read and understand");
  }
 
  //function with parameters 
  myEvent(evt: any)
  {
    console.log(evt);
  } 
  

    


}
