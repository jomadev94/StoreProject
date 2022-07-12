import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginComponent } from '@modules/login/components/login/login.component';
import { Globals } from '@static/globals';
import { Menu } from '@static/menu';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  roles = Globals.roles;
  options = Menu.options;
  login = LoginComponent;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: 'main',
          start: '-100px top',
          end: '+=100px top',
          scrub: 1,
          id: 'header-id',
          toggleActions: 'restart none none reverse',
        },
      })
      .to('header', {
        duration: 1,
        backgroundColor: '#aa98d2',
      })
      .to('.searcher',{
        duration:1,
        translateX:50,
      })
      .from('#logo-header', {
        duration: 1,
        delay:1,
        opacity:0,
        yPercent: -100
      });
      
  }
}
