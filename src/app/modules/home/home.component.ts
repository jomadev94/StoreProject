import { Component, OnInit } from '@angular/core';
import { Roles } from '@enumerables/roles';
import { Product } from '@models/product';
import { Button } from '@models/view/button';
import { ProductService } from '@services/product/product.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[];
  buttons: Button[] = [
    {
      text: 'ver todos',
      href: '/product/search',
      params:{order:0},
      roles:[Roles.Admin,Roles.Client,Roles.NoAuth]
    },
  ];

  constructor(private productService:ProductService) { 
    this.products=[];
  }
  
  async ngOnInit(): Promise<void> {
    const res=await lastValueFrom(this.productService.getProducts({pageNumber:1, pageSize:10}));
    if(res.success){
      this.products=res.data.items;
    }
  }

}
