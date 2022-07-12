import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Product } from '@models/product';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss'],
})
export class ItemCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselBox') carouselBox: ElementRef;
  @Input() products: Product[];
  currentPosition: number;
  lastPosition: number;

  constructor() {
    this.currentPosition=0;
    this.lastPosition=999;
  }

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
    this.lastPosition = Math.ceil(this.products.length / itemsForPage) - 1;
  }

  reset() {
    const elem = this.carouselBox.nativeElement as HTMLElement;
    elem.style.transform = 'translateX(0%)';
    this.currentPosition = 0;
  }
}
