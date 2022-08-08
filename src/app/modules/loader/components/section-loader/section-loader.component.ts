import { Component, OnInit } from '@angular/core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-section-loader',
  templateUrl: './section-loader.component.html',
  styleUrls: ['./section-loader.component.scss']
})
export class SectionLoaderComponent implements OnInit {

  img:Image;

  constructor() {
    this.img={
      src:"/assets/img/loader/load-section.gif",
      alt:"Cargando"
    }
  }

  ngOnInit(): void {
  }

}
