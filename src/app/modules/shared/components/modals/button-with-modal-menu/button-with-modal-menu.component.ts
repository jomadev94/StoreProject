import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  StaticProvider,
  ViewChild,
} from '@angular/core';
import { Roles } from '@enumerables/roles';
import { DATA_OVREF } from '@static/data';
import gsap from 'gsap';

@Component({
  selector: 'app-button-with-modal-menu',
  templateUrl: './button-with-modal-menu.component.html',
  styleUrls: ['./button-with-modal-menu.component.scss'],
})
export class ButtonWithModalMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('button') button: ElementRef;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Input() roles: Roles[];
  @Input() component: any = null;
  @Input() providers: StaticProvider[] = [];

  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const target = this.button.nativeElement as HTMLElement;
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ])
    });
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attachments().subscribe(() => {
      gsap.to('.modal-menu', { duration: 1, opacity: 1, ease: 'power2' });
    });
    this.overlayRef.detachments().subscribe(()=>{
      this.close.emit(true);
    })
  }

  openModal() {
    const portalInjector = Injector.create({
      providers: this.providers.concat([
        { provide: DATA_OVREF, useValue: this.overlayRef },
      ]),
    });
    const portal = new ComponentPortal(this.component, null, portalInjector);
    this.overlayRef.attach(portal);
  }
}
