import { AfterViewInit, Component } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { StorageService } from '@services/storage/storage.service'
import { ComponentPortal } from '@angular/cdk/portal';
import { CookieModalComponent } from '@modules/cookie-modal/components/cookie-modal/cookie-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'StoreProject';
  overlayRef: OverlayRef;
  portal: ComponentPortal<CookieModalComponent>;

  constructor(private storageService:StorageService, private overlay:Overlay){
    this.portal=new ComponentPortal(CookieModalComponent);
    const config= new OverlayConfig({
      hasBackdrop:false,
      positionStrategy: this.overlay.position().global().bottom()
    })
    this.overlayRef=this.overlay.create(config);
  }
  
  ngAfterViewInit(): void {
    const acceptCookies=this.storageService.retrive('accept-cookies');
    if(!acceptCookies){
      const ref=this.overlayRef.attach<CookieModalComponent>(this.portal);
      ref.instance.close.subscribe(()=>{
        this.overlayRef.detach();
      })
    }
  }

}
