import { Component, OnInit } from '@angular/core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  img:Image={
    src:"/assets/img/alert/404.png",
    alt:"Not Found"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
