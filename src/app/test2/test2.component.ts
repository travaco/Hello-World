import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show = false;
  show2 = true;
  dispy = "no";

  display()
  {
    return this.show=true;
  }


}