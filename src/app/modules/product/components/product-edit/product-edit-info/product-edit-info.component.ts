import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@models/product';
import { ProductService } from '@services/product/product.service';
import { selectValidator } from '@validators/selectValidator';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.scss'],
})
export class ProductEditInfoComponent implements OnInit {
  @Input() product: Product;
  form: FormGroup;
  msg: string[] = [];
  error: boolean = false;
  change: boolean = false;
  initial: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        this.product.name,
        [Validators.required, Validators.maxLength(80)],
      ],
      category: [this.product.category, selectValidator()],
      description: [
        this.product.description,
        [Validators.required, Validators.maxLength(500)],
      ],
      stock: [
        this.product.stock,
        [Validators.required, Validators.min(0), Validators.max(100000)],
      ],
      price: [this.product.price, [Validators.required, Validators.min(100)]],
      discount: [
        this.product.discount,
        [Validators.required, Validators.min(0), Validators.max(90)],
      ],
    });
    this.initial = this.form.value;
    this.form.valueChanges.subscribe(() => {
      this.change = this.detectChanges();
    });
  }

  detectChanges(): boolean {
    const productoEditado = this.form.value as Product;
    for (const key in productoEditado) {
      const valor1 = productoEditado[key as keyof Product];
      const valor2 = this.product[key as keyof Product];
      if (valor1 != valor2) {
        return true;
      }
    }
    return false;
  }

  reset() {
    this.form.reset(this.initial);
    this.change=false;
  }

  resetMessage(){
    setTimeout(()=>{
      this.msg=[];
    },6000);
  }

  async edit() {
    const info = this.form.value as Product;
    info.productId=this.product.productId;
    const res = await lastValueFrom(
      this.productService.updateInfo(info, this.product.productId)
    );
    if (res.success) {
      this.error = false;
      this.msg = ['Datos del producto actualizados correctamente'];
      this.initial=info;
      this.reset();
      this.resetMessage();
      return;
    }
    this.error = true;
    this.msg = res.errorMessage;
    this.resetMessage();
  }
}
