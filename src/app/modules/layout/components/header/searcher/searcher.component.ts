import { Component, OnInit, Renderer2 } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Categories } from '@enumerables/categories';
import { Category } from '@models/view/category';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  open: boolean;
  selected: Category;
  iconOpen: IconProp;

  categories: Category[] = [
    {
      name: Categories.Todas,
      icon: 'ellipsis',
    },
    {
      name: Categories.Figuras,
      icon: 'robot',
    },
    {
      name: Categories.Comics,
      icon: 'book-journal-whills',
    },
    {
      name: Categories.Videojuegos,
      icon: 'gamepad',
    },
    {
      name: Categories.Ropa,
      icon: 'shirt',
    },
    {
      name: Categories.Accesorios,
      icon: 'dice',
    },
  ];

  constructor(private renderer:Renderer2) {
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
    console.log("activando");
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
}
