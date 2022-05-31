import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild("optionsPanel") optionsPanel:ElementRef;

  open:boolean=false;

  constructor(private render:Renderer2) { }

  ngOnInit(): void {
  }

  openClosePanel(){
    const panel=this.optionsPanel.nativeElement as HTMLElement; 
    if(this.open){
      this.render.removeClass(panel,"open");
    }
    else{
      this.render.addClass(panel,"open");
      setTimeout(()=>{
        window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
      },200);
    }
    this.open=!this.open;
  }

}
