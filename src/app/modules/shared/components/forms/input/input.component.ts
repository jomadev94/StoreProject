import { Component, Input, OnInit } from '@angular/core';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends InputModelComponent implements OnInit {

  @Input() type: string="text";

  constructor() {
    super();
  }

  ngOnInit(): void {}

}
