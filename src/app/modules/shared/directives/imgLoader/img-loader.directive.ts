import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgLoader]'
})
export class ImgLoaderDirective {

  constructor(
    private renderer:Renderer2,
    private element:ElementRef,
  ) {}

  set loading(val:boolean){
    if(val){
      this.renderer.addClass(this.element.nativeElement,'loading-img')
      return
    }
    this.renderer.removeClass(this.element.nativeElement,'loading-img')
  }

  @HostListener('loadstart')
  onLoadStart(){
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

}
