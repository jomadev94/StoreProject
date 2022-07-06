import { Component, OnInit } from '@angular/core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  img:Image={
    src:"/assets/img/alert/empty.png",
    alt:"No hay productos para mostrar"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
