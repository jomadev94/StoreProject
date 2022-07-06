import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Categories } from '@enumerables/categories';
import { SearchOrder } from '@enumerables/searchOrder';
import { Product } from '@models/product';
import { QueryProduct } from '@models/queryProduct';
import { ResponsePagination } from '@models/responsePagination';
import { ProductService } from '@services/product/product.service';
import { Globals } from '@static/globals';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  buttons = [Globals.buttons['home']];
  searchCategory: string;
  searchProduct: string | null;
  form: FormGroup;
  categories = Object.values(Categories).filter((c) => c != 'Todas');
  orders = Object.values(SearchOrder);
  pagination: ResponsePagination<Product>;
  items: Product[] = [];
  query: QueryProduct;
  loadSearch: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get empty() {
    return this.items.length === 0;
  }

  private getParam(key: string) {
    return this.route.snapshot.queryParams[key];
  }

  async ngOnInit(): Promise<void> {
    this.route.queryParamMap.subscribe(async (param: ParamMap) => {
      this.searchProduct = param.get('name');
      const categoryParam = parseInt(this.getParam('category'));
      this.searchCategory =
        categoryParam >= 0 && categoryParam <= this.categories.length - 1
          ? this.categories[categoryParam]
          : 'Todas';
      this.query = {
        pageNumber:
          param.get('pageNumber') != null
            ? parseInt(param.get('pageNumber')!)
            : 1,
        pageSize: 3,
        name: param.get('name'),
        category: param.get('category') as Categories,
        ofert: param.get('ofert') === 'true' ? true : false,
        stock: param.get('stock') === 'false' ? false : true,
        minPrice:
          param.get('minPrice') != null
            ? parseInt(param.get('minPrice')!)
            : null,
        maxPrice:
          param.get('maxPrice') != null
            ? parseInt(param.get('maxPrice')!)
            : null,
        order: param.get('order'),
      };
      this.form = this.formBuilder.group({
        name: [this.query.name],
        category: [this.query.category ? this.query.category : ''],
        ofert: [this.query.ofert],
        stock: [this.query.stock],
        minPrice: [this.query.minPrice],
        maxPrice: [this.query.maxPrice],
        order: [this.query.order ? this.query.order : 0],
      });
      const res = await lastValueFrom(
        this.productService.getProducts(this.query)
      );
      if (res.success) {
        this.pagination = res.data;
        this.items = this.pagination.items;
      }
      this.form.get('order')?.valueChanges.subscribe((value) => {
        this.query.order = value;
        this.router.navigate(['/product/search'], { queryParams: this.query });
      });
    });
  }

  goTo(page:number){
    if(page >= 1 && page <= this.pagination.totalPage){
      this.query.pageNumber=page;
      this.router.navigate(['/product/search'], { queryParams: this.query });
    }
  }

  search() {
    this.query = this.form.value as QueryProduct;
    this.router.navigate(['/product/search'], { queryParams: this.query });
  }
}
