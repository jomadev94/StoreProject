import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faBars, faCoffee, faXmark, IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild("headerOptions") headerOptions:ElementRef;
  open:boolean=false;
  icon:IconName="bars"
  
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  showMenu():void{
    const options=this.headerOptions.nativeElement;
    if(this.open){
      this.open=false;
      this.icon="bars"
      this.renderer.addClass(options,"header-options--close");
      return
    }
    this.icon="xmark";
    this.renderer.removeClass(options,"header-options--close");
    this.open=true;
  }

}
