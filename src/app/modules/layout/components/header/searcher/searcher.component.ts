import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Category } from '@models/view/category';
import { Globals } from '@static/globals';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QueryProduct } from '@models/queryProduct';
import { Router } from '@angular/router';
import { Categories } from '@enumerables/categories';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  open: boolean;
  selected: Category;
  iconOpen: IconProp;
  categories: Category[] = Globals.categories;
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router) {
    this.form=this.formBuilder.group({
      name:['']
    });
  }

  ngOnInit(): void {
    this.selected = this.categories[0];
    this.iconOpen = 'angle-down';
  }

  changeCategory(): void {
    this.open= !this.open;
    this.iconOpen= this.open? "angle-up":"angle-down";
  }

  selectCategory(event: Event): void {
    const element = event.target as HTMLElement;
    if (element.tagName === 'BUTTON') {
      const index=element.getAttribute("value");
      element.classList.add("black");
      if(index!=null){
        this.selected=this.categories[Number.parseInt(index)];
        this.changeCategory();
      }
    }
  }

  search(){
    const query=this.form.value as QueryProduct;
    if(this.selected.name != "Todas"){
      const searchCategory=Object.values(Categories).filter(c=>c != "Todas");
      query.category=searchCategory.indexOf(this.selected.name).toString();
    }
    this.router.navigate(['/product/search'],{queryParams:query});
  }
}
