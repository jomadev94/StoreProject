import { Component, OnInit } from '@angular/core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
})
export class SoonComponent implements OnInit {

  img:Image={
    src:"/assets/img/alert/soon.png",
    alt:"Página en construcción"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
