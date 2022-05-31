import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription, TimeInterval } from 'rxjs';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  automatic: any;
  currentItem: number = 0;
  goPosition: number;
  eventSubscription: Subscription;
  lista: Array<number> = [1, 2, 3, 4, 5, 6];
  order: Array<number> = [0, 1, 2, 3, 4, 5];
  move: boolean = false;
  @ViewChild('gallery') gallery: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const gallery = this.gallery.nativeElement;
    this.eventSubscription = fromEvent(gallery, 'transitionend').subscribe(
      (event) => {
        const index = this.order.indexOf(this.currentItem);
        for (let i = 0; i < index; i++) {
          gallery.appendChild(gallery.childNodes[0]);
          this.order.push(this.order[0]);
          this.order.shift();
        }
        gallery.style.transform = 'translateX(0)';
        gallery.style.transition = 'none';
        setTimeout(function () {
          gallery.style.transition = 'transform 1s ease-in-out';
        });
        if (this.move) {
          this.move = false;
          this.play();
        }
      }
    );
    this.play();
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  next() {
    this.currentItem++;
    if (this.currentItem == 6) {
      this.currentItem = 0;
    }
    this.changePosition();
  }

  play() {
    this.automatic = setInterval(() => {
      this.next();
    }, 5000);
  }

  stop() {
    clearInterval(this.automatic);
  }

  changePosition() {
    const gallery = this.gallery.nativeElement;
    const index = this.order.indexOf(this.currentItem);
    gallery.style.transform = `translateX(-${100 * index}%)`;
  }

  goTo(event: Event) {
    const element = event.target as HTMLElement;
    if (element.tagName === 'BUTTON') {
      this.stop();
      this.move = true;
      const value = element.getAttribute('value');
      if (value != null) {
        this.currentItem = Number.parseInt(value);
        this.changePosition();
      }
    }
  }
}
