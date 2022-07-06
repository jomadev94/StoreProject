import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@models/product';
import { Card } from '@models/view/card';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  newProduct:boolean;
  showPrice:number;

  @Input() product:Product;

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
    const now=new Date();
    const date=new Date(this.product.date);
    this.newProduct= date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()? true : false;
    if(this.product.discount>0){
      const discount=(this.product.discount/100)*this.product.price;
      this.showPrice=this.product.price - discount;
    }
    else{
      this.showPrice=this.product.price;
    }
  }

  viewProduct(){
    this.router.navigate([`/product/view/${this.product.productId}`]);
  }

}
