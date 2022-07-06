import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Globals } from '@static/globals';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() text:string;

  constructor() { }

  ngOnInit(): void {
  }

}
