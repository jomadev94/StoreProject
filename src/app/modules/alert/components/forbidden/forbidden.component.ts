import { Component, OnInit } from '@angular/core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
})
export class ForbiddenComponent implements OnInit {

  img:Image={
    src:"/assets/img/alert/403.png",
    alt:"Forbidden",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
