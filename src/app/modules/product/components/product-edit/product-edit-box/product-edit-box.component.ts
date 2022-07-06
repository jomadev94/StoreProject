import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit-box',
  templateUrl: './product-edit-box.component.html',
  styleUrls: ['./product-edit-box.component.scss']
})
export class ProductEditBoxComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
