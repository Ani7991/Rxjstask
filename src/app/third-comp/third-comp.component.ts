import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
  footer;
  constructor(private service: MyserviceService) { }

  ngOnInit() {
  }
  onClick() {
    this.service.backcolor.next(this.footer);
    console.log(this.service.backcolor.getValue());
  }
  // onLogOut() {
  //   this.service.logOut();
  // }
}
