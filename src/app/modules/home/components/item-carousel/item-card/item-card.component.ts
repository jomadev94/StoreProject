import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@models/view/card';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  newProduct:boolean;
  showPrice:number;

  @Input() info:Card;

  constructor() { 
  }

  ngOnInit(): void {
    const now=new Date();
    this.newProduct= this.info.date.getMonth() === now.getMonth() && this.info.date.getFullYear() === now.getFullYear()? true : false;
    if(this.info.discount>0){
      const discount=(this.info.discount/100)*this.info.price;
      this.showPrice=this.info.price - discount;
    }
    else{
      this.showPrice=this.info.price;
    }
  }

}
