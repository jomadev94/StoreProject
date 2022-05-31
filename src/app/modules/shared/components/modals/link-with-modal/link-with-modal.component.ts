import { Overlay, OverlayConfig, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import gsap from 'gsap';
import { Roles } from '@enumerables/roles';
import { LoginComponent } from '@modules/login/components/login/login.component';

@Component({
  selector: 'app-link-with-modal',
  templateUrl: './link-with-modal.component.html',
  styleUrls: ['./link-with-modal.component.scss']
})
export class LinkWithModalComponent implements OnInit {

  @Input() roles:Roles[];
  @Input() title:string;
  @Input() portal: ComponentPortal<any>;
  @Input() buttonStyle:string='link-nav';

  overlayRef:OverlayRef;

  constructor(private sso:ScrollStrategyOptions, private overlay:Overlay) {
    const config=new OverlayConfig({
      hasBackdrop:true,
      backdropClass:'overlay-dark',
      scrollStrategy: this.sso.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })
    this.overlayRef=this.overlay.create(config);
    this.overlayRef.backdropClick().subscribe(()=>{
      this.closeModal();
    });
    this.overlayRef.attachments().subscribe(()=>{
      gsap.to('.modal-box',{duration:1,scale:1,ease:"bounce"});
    });
  }

  ngOnInit(): void {
  }

  openModal(){
    const ref=this.overlayRef.attach(this.portal);
    const listenClose=ref.instance as LoginComponent
    listenClose.modalClose.subscribe(()=>{
      this.closeModal();
    })
  }

  closeModal(){
    gsap.to('.modal-box',{duration:.2,opacity:0,ease:"power2"}).then(()=>{
      this.overlayRef.detach();
    });
  }

}
