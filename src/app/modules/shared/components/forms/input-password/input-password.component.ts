import { Component, OnInit } from '@angular/core';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent extends InputModelComponent implements OnInit {

  type:string;

  constructor() {
    super();
    this.type='password';
  }

  ngOnInit(): void {
  }

  toggle(){
    this.type=this.type === 'password'? 'text' : 'password';
  }

}
