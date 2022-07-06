import {
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  Injector,
  Input,
  OnInit,
  StaticProvider,
} from '@angular/core';
import gsap from 'gsap';
import { Roles } from '@enumerables/roles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DATA_OVREF } from '@static/data';

@Component({
  selector: 'app-link-with-modal',
  templateUrl: './link-with-modal.component.html',
  styleUrls: ['./link-with-modal.component.scss'],
})
export class LinkWithModalComponent implements OnInit {
  @Input() roles: Roles[];
  @Input() title: string;
  @Input() component: any = null;
  @Input() providers: StaticProvider[] = [];
  @Input() buttonStyle: string = 'link-nav';
  @Input() disabled: boolean = false;
  @Input() icon: IconProp;

  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'overlay-dark',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attachments().subscribe(() => {
      gsap.to('.modal-box', { duration: 1, scale: 1, ease: 'bounce' });
    });
  }

  ngOnInit(): void {}

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
