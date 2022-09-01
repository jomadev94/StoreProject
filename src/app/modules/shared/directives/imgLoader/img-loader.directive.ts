import { Directive, ElementRef, HostListener, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appImgLoader]'
})
export class ImgLoaderDirective implements OnInit {

  constructor(
    private renderer:Renderer2,
    private element:ElementRef,
  ) {}

  ngOnInit(): void {
    this.loading=true;
  }

  @HostListener('load')
  onLoad(){
    this.loading=false;
  }

  @HostListener('error')
  onError(){
    this.renderer.addClass(this.element.nativeElement,'error-img')
  }

  set loading(val:boolean){
    if(val){
      this.renderer.addClass(this.element.nativeElement,'loading-img')
      return
    }
    this.renderer.removeClass(this.element.nativeElement,'loading-img')
  }

}
