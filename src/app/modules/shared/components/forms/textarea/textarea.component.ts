import { Component, OnInit } from '@angular/core';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends InputModelComponent implements OnInit {

  count: number = 0;

  constructor() {
    super();
  }
  
  ngOnInit(): void {
    const value=this.form.get(this.controlName)?.value;
    if(value != null){
      this.count=value.length;
    }
    this.form.get(this.controlName)?.valueChanges.subscribe((change) => {
      this.count = change.length;
    });
  }
  
}
