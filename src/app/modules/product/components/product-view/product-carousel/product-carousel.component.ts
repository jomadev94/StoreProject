import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Product } from '@models/product';
import { Image } from '@models/view/image';
import { DATA_IMGS, DATA_NUMBER, DATA_OVREF } from '@static/data';
import gsap from 'gsap';
import { Subscription } from 'rxjs';
import { FullPreviewComponent } from '../full-preview/full-preview.component';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() product:Product;
  @ViewChild('gallery') gallery: ElementRef;
  imgSelected: Image;
  cantShow: number;
  imgWidth: number;
  gap: string;
  overlayRef: OverlayRef;
  index: number = 0;
  indexFull: number = 0;
  attach$:Subscription;
  backdrop$:Subscription;
  imgs:Image[]=[];

  constructor(private renderer: Renderer2, private overlay: Overlay) {
  }

  async ngOnInit(): Promise<void> {
    for (const file of this.product.files!) {
      this.imgs.push({
        alt:file.fileId,
        src: file.path,
      });
    }
    this.imgSelected = this.imgs[0];
  }
  
  ngOnDestroy(): void {
    this.attach$.unsubscribe();
    this.backdrop$.unsubscribe();
  }

  fullPagePreview() {
    const portalInjector = Injector.create({
      providers: [
        { provide: DATA_OVREF, useValue: this.overlayRef},
        { provide: DATA_IMGS, useValue: this.imgs },
        { provide: DATA_NUMBER, useValue: this.indexFull },
      ],
    });
    const portal = new ComponentPortal<FullPreviewComponent>(
      FullPreviewComponent,
      null,
      portalInjector
    );
    this.overlayRef.attach(portal);
  }

  ngAfterViewInit(): void {
    this.calculate();
    this.renderer.addClass(this.gallery.nativeElement.children[0], 'selected');
    const overlayConfig: OverlayConfig = {
      hasBackdrop: true,
      backdropClass: 'overlay-dark',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    };
    this.overlayRef = this.overlay.create(overlayConfig);
    this.attach$=this.overlayRef.backdropClick().subscribe(async () => {
      await gsap.to('.full-box', { duration: 0.5, opacity: 0, ease: 'power2' });
      this.overlayRef.detach();
    });
    this.backdrop$=this.overlayRef.attachments().subscribe(() => {
      gsap.from('.full-box__item', { duration: 0.5, scale: 0, ease: 'power2' });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculate();
    this.move();
  }

  calculate() {
    const gallery = this.gallery.nativeElement;
    this.imgWidth = gallery.children[0].offsetWidth;
    this.gap = getComputedStyle(this.gallery.nativeElement).getPropertyValue(
      '--gap'
    );
    this.cantShow = Number.parseInt(
      getComputedStyle(this.gallery.nativeElement).getPropertyValue(
        '--cant-show'
      )
    );
  }

  move() {
    const gallery = this.gallery.nativeElement;
    gallery.style.transform = `translateX(calc((${this.imgWidth}px + ${this.gap})* -${this.index}))`;
  }

  next() {
    if (this.index + this.cantShow < this.imgs.length) {
      this.index++;
      this.move();
      this.changeSelected();
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
      this.move();
      this.changeSelected();
    }
  }

  changeSelected() {
    this.resetSelected();
    const elem = this.gallery.nativeElement.children[this.index];
    this.renderer.addClass(elem, 'selected');
    this.imgSelected = this.imgs[this.index];
  }

  resetSelected() {
    const children = this.gallery.nativeElement.children;
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      this.renderer.removeClass(element, 'selected');
    }
  }

  preview(event: any) {
    const src = event.target.childNodes[0].src;
    this.searchIndex(src);
    this.resetSelected();
    this.renderer.addClass(event.target, 'selected');
  }

  searchIndex(src: string) {
    for (let index = 0; index < this.imgs.length; index++) {
      if (this.imgs[index].src == src) {
        this.indexFull = index;
        this.imgSelected = this.imgs[index];
        return;
      }
    }
  }

}
