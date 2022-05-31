import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Card } from '@models/view/card';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss'],
})
export class ItemCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselBox') carouselBox: ElementRef;
  items: Card[] = [
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
    {
      name: 'producto1',
      discount: 10,
      date: new Date(),
      price: 23567,
      img: {
        front: {
          src: '/assets/img/products/figure_1.jpg',
          description: 'img1',
        },
        back: {
          src: '/assets/img/products/figure_2.jpg',
          description: 'img1',
        },
      },
    },
  ];
  currentPosition = 0;
  lastPosition: number = 999;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.calculate();
  }

  onResize(event: Event) {
    this.calculate();
    this.reset();
  }

  next() {
    this.currentPosition++;
    this.makeTransition();
  }

  previous() {
    this.currentPosition--;
    this.makeTransition();
  }

  makeTransition() {
    const elem = this.carouselBox.nativeElement as HTMLElement;
    elem.style.transform = `translateX(-${this.currentPosition * 100}%)`;
  }

  calculate() {
    const box = this.carouselBox.nativeElement as HTMLElement;
    const item = box.childNodes[0] as HTMLElement;
    const itemsForPage = Math.round(box.offsetWidth / item.offsetWidth);
    this.lastPosition = Math.ceil(this.items.length / itemsForPage) - 1;
  }

  reset() {
    const elem = this.carouselBox.nativeElement as HTMLElement;
    elem.style.transform = 'translateX(0%)';
    this.currentPosition = 0;
  }
}
