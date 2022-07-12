import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {Router } from '@angular/router';
import gsap from 'gsap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title:string;
  @Input() overRef: OverlayRef;

  private _routerSubs:Subscription;

  constructor(private router:Router) {
  }

  ngOnDestroy(): void {
    this._routerSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.overRef.backdropClick().subscribe(()=>{
      this.close();
    });
    this._routerSubs=this.router.events.subscribe(()=>{
      this.close();
    })
  }

  close(){
    gsap.to('.modal-box',{duration:.2,opacity:0,ease:"power2"}).then(()=>{
      this.overRef.detach();
    });
  }

}
