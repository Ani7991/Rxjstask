import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  mein;
  urll;
  errorUrl;
  // e;
  constructor(private service: MyserviceService) {
    console.log(service.color.getValue());

    // example.getConfig().pipe(
    //   switchMap(data => Object.entries(data).filter(([key,value]) => key=="reg.general.document_proccessing_error"))
    // ).subscribe(x=> this.urll = x);
    // example.errorurl().subscribe(x=> this.errorUrl = x);
    // this.errorUrl = service.errorurl();
    // // this.errorUrl.subscribe(x => this.e = x);
    // console.log(this.errorUrl);
   }

  ngOnInit() {
  }
  onClick() {
    this.service.color.next(this.mein);
    console.log(this.service.color.getValue());
  }
  // onLogIn() {
  //   this.service.logIn();
  // }
}
