import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  @Input() form:FormGroup;
  @Input() title:string;
  @Input() max:number=5;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
  }

}
