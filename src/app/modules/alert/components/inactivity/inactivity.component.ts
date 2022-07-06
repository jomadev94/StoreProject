import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';
import { Component, HostListener, Injector, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { InactiveService } from '@services/inactive/inactive.service';
import { DATA_OVREF } from '@static/data';
import gsap from 'gsap';
import { Subscription } from 'rxjs';
import { InactivityModalComponent } from './inactivity-modal/inactivity-modal.component';

@Component({
  selector: 'app-inactivity',
  template:'',
})
export class InactivityComponent implements OnInit, OnDestroy {
  
  isAuth:boolean;
  auth$:Subscription;
  overlayRef:OverlayRef;

  @ViewChild("template") template:any;

  @HostListener('window:click', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:keydown', ['$event'])
  resetTime(){
    if(this.isAuth){
      this.inactiveService.setTime();
    }
  }

  constructor(private inactiveService:InactiveService, private authService:AuthService, private overlay:Overlay, private viewRef:ViewContainerRef) {
    const config: OverlayConfig={
      hasBackdrop:true,
      backdropClass:'overlay-dark',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    }
    this.overlayRef=this.overlay.create(config);
    this.overlayRef.attachments().subscribe(()=>{
      gsap.to('.modal-box',{duration:1,scale:1,ease:"bounce"});
    });
    this.overlayRef.detachments().subscribe(()=>{
      if(this.isAuth){
        this.inactiveService.start();
      }
    })
  }
  
  ngOnInit(): void {
    this.auth$=this.authService.userAuth$.subscribe(res=>{
      console.log("auth es:",res);
      this.isAuth=res;
      if(this.isAuth){
        this.inactiveService.start();
        this.inactiveService.closeSession$.subscribe(res=>{
          if(res){
            this.inactivity();
          }
        });
      }
    });
  }
  
  inactivity(){
    const portalInjector = Injector.create({
      providers: [
        { provide: DATA_OVREF, useValue: this.overlayRef },
      ],
    });
    const portal= new ComponentPortal(InactivityModalComponent, null, portalInjector);
    this.overlayRef.attach(portal);
  }
  
  ngOnDestroy(): void {
    this.auth$.unsubscribe();
  }
}
