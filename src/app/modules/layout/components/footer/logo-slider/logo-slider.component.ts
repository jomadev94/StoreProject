import { Component } from '@angular/core';
import { Button } from '@models/view/button';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.scss']
})
export class LogoSliderComponent{

  buttons:Button[]=[
    {
      background:{
        src:"/assets/img/logos/logo_1.png",
        alt:"Logo DC"
      },
      href: "https://www.dccomics.com/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_2.png",
        alt:"Logo Funko"
      },
      href: "https://www.funko.com/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_3.png",
        alt:"Logo Lego"
      },
      href:"https://www.lego.com/es-ar"
    },
    {
      background:{
        src:"/assets/img/logos/logo_4.png",
        alt:"Logo Marvel"
      },
      href: "https://www.marvel.com/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_5.jpg",
        alt:"Logo Mezco"
      },
      href: "https://www.mezcotoyz.com/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_6.png",
        alt:"Logo Neca"
      },
      href:"https://necaonline.com/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_7.png",
        alt:"Logo Kotobukiya",
      },
      href: "https://en.kotobukiya.co.jp/"
    },
    {
      background:{
        src:"/assets/img/logos/logo_8.png",
        alt:"Logo HotToys"
      },
      href: "http://www.hottoys.com.hk/"
    },
  ]

  constructor() { }

}
