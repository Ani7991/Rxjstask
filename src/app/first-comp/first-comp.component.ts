import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  colorText;
  backgroundColor;
  constructor(private ser: MyserviceService) {
   this.ser.color.subscribe(xcolor => this.colorText = xcolor);
   this.ser.backcolor.subscribe(xcolor => this.backgroundColor = xcolor);
  }

  ngOnInit() {
  }

}
