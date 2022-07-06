import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/product';
import { Tag } from '@models/tag';
import { UpdateTags } from '@models/updateTags';
import { ProductService } from '@services/product/product.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product-edit-tag',
  templateUrl: './product-edit-tag.component.html',
  styleUrls: ['./product-edit-tag.component.scss'],
})
export class ProductEditTagComponent implements OnInit {
  @Input() product: Product;
  tags: Tag[] = [];
  init: Tag[] = [];
  msg: string[] = [];
  err: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (this.product.tags) {
      this.tags = [...this.product.tags];
      this.init = [...this.tags];
    }
  }

  get check() {
    return this.tags.length === this.init.length;
  }

  async setTags() {
    const update: UpdateTags = {
      product: this.product,
      newTags: this.tags.filter((t) => !this.product.tags?.includes(t)),
      deleteTags: this.product.tags?.filter((t) => !this.tags.includes(t)),
    };
    const res = await lastValueFrom(
      this.productService.updateTags(update, this.product.productId)
    );
    if (res.success) {
      this.err = false;
      this.msg = ['Etiquetas del producto modificadas exitosamente'];
      return;
    }
    this.err = true;
    this.msg = res.errorMessage;
    console.log(res);
  }
}
