import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '@models/view/image';
import { SectionButton } from '@models/view/sectionButton';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.scss']
})
export class CreatedComponent implements OnInit {

  img:Image={
    src:"/assets/img/alert/new.png",
    alt:"Producto creado",
  }

  buttons: SectionButton[]=[{
    text:"Crear otro producto",
    action:this.again
  }]

  constructor() { }

  again(){
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
