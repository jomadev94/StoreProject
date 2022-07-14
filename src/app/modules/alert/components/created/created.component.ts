import { Component, OnInit } from '@angular/core';
import { Button } from '@models/view/button';
import { Image } from '@models/view/image';

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

  buttons: Button[]=[{
    text:"Crear otro producto",
    params:this.again
  }]

  constructor() { }

  again(){
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
