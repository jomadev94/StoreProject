import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ImageWithLink } from '@models/view/imageWithLink';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.scss']
})
export class LogoSliderComponent implements OnInit, AfterViewInit{

  @ViewChild("logoBox") logoBox: ElementRef;

  images:ImageWithLink[]=[
    {
      src:"../../../assets/img/logos/logo_1.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_2.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_3.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_4.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_5.jpg",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_6.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_7.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
    {
      src:"../../../assets/img/logos/logo_8.png",
      description:"algo",
      link: "../../../assets/img/logos/logo_1.png"
    },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    const elem=this.logoBox.nativeElement as HTMLElement;
    elem.style.setProperty("--cant-item",`${this.images.length}`)
  }

  ngOnInit(): void {
  }

}
