import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '@enumerables/categories';
import { CategoryButton } from '@models/view/categoryButton';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoryButton[] = [
    {
      name: Categories.Figuras,
      background: {
        src: '/assets/img/categories/category_1.jpg',
        description: 'Botón de categoria Figuras',
        link: '',
      },
    },
    {
      name: Categories.Comics,
      background: {
        src: '/assets/img/categories/category_2.jpg',
        description: 'Botón de categoria Comics',
        link: '',
      },
    },
    {
      name: Categories.Videojuegos,
      background: {
        src: '/assets/img/categories/category_3.jpg',
        description: 'Botón de categoria Videojuegos',
        link: '',
      },
    },
    {
      name: Categories.Ropa,
      background: {
        src: '/assets/img/categories/category_4.jpg',
        description: 'Botón de categoria Ropa',
        link: '',
      },
    },
    {
      name: Categories.Accesorios,
      background: {
        src: '/assets/img/categories/category_5.jpg',
        description: 'Botón de categoria Accesorios',
        link: '',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
