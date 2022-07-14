import { Component, OnInit } from '@angular/core';
import { Button } from '@models/view/button';
import { Globals } from '@static/globals';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Button[] = [
    {
      text: Globals.categories[1].name,
      background: {
        src: '/assets/img/categories/category_1.jpg',
        alt: 'Botón de categoria Figuras',
      },
      href:"/product/search",
      params:{category:0},
      icon: Globals.categories[1].icon
    },
    {
      text: Globals.categories[2].name,
      background: {
        src: '/assets/img/categories/category_2.jpg',
        alt: 'Botón de categoria Comics',
      },
      href:"/product/search",
      params:{category:1},
      icon: Globals.categories[2].icon
    },
    {
      text: Globals.categories[3].name,
      background: {
        src: '/assets/img/categories/category_3.jpg',
        alt: 'Botón de categoria Videojuegos',
      },
      href:"/product/search",
      params:{category:2},
      icon: Globals.categories[3].icon
    },
    {
      text: Globals.categories[4].name,
      background: {
        src: '/assets/img/categories/category_4.jpg',
        alt: 'Botón de categoria Ropa',
      },
      href:"/product/search",
      params:{category:3},
      icon: Globals.categories[4].icon
    },
    {
      text: Globals.categories[5].name,
      background: {
        src: '/assets/img/categories/category_5.jpg',
        alt: 'Botón de categoria Accesorios',
      },
      href:"/product/search",
      params:{category:4},
      icon: Globals.categories[5].icon
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
