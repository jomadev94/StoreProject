import { Component, Input, OnInit } from '@angular/core';
import { ImageWithLink } from '@models/view/imageWithLink';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  promotions: ImageWithLink[] = [
    {
      src: '/assets/img/promos/promo_1.png',
      description: 'promo 1',
      link: '',
    },
    {
      src: '/assets/img/promos/promo_2.png',
      description: '',
      link: '',
    },
    {
      src: '/assets/img/promos/promo_3.png',
      description: '',
      link: '',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
