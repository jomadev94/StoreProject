import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categories } from '@enumerables/categories';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  @Input() form:FormGroup;
  @Input() title:string;
  categories=Object.values(Categories).filter(c => c != "Todas");

  constructor() { }

  ngOnInit(): void {
  }

}
