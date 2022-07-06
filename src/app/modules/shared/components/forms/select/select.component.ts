import { Component, Input, OnInit } from '@angular/core';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends InputModelComponent implements OnInit {

  @Input() options:any[];
  @Input() needEmpty:boolean=true;
  @Input() defaultText:string="Seleccione una opción";

  constructor(){
    super();
  }

  get value(){
    return this.form.get(this.controlName)?.value;
  }

  ngOnInit(): void {
  }

}
