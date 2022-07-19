import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import gsap from 'gsap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent implements AfterViewInit, OnDestroy {
  show: boolean = false;
  icons: number[];
  percent: number = 0;
  private interval: any;
  private routerSubs$: Subscription;

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.routerSubs$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.routerSubs$ = this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart : {
          this.show = true;
          this.generateRandom();
          setTimeout(() => {
            this.animateIcons();
            this.animateBar();
          });
          this.interval = setInterval(async () => {
            await this.load(this.percent);
            if (this.percent <= 80) {
              this.percent += 10;
            }
          }, 200);
          break;
        }
        case event instanceof NavigationError:
        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd: {
          setTimeout(async () => {
            await clearInterval(this.interval);
            if(this.show){
              this.percent = 100;
              await this.load(94);
              await this.fadeOutLoader();
              this.percent = 0;
              setTimeout(() => {
                this.show = false;
              });
            }
          }, 3000);
          break;
        }
      }
    });
  }

  private generateRandom(): void {
    this.icons = [];
    let number = Math.floor(Math.random() * 24);
    for (let index = 0; index < 4; index++) {
      while (this.icons.includes(number)) {
        number = Math.floor(Math.random() * 24);
      }
      this.icons.push(number);
    }
  }

  fadeOutLoader() {
    return gsap.to('.loader-box', {
      duration: 0.5,
      opacity: 0,
      ease: 'linear',
    });
  }

  load(percent: number) {
    return gsap.to('.loader-icon', {
      xPercent: percent,
      duration: 0.2,
      ease: 'linear',
    });
  }

  animateIcons() {
    return gsap.to('.icons img', {
      yPercent: -50,
      scale: 1.05,
      stagger: 0.2,
      duration: 0.5,
      ease: 'elastic',
      yoyo: true,
      yoyoEase: 'back',
      repeat: -1,
    });
  }

  animateBar() {
    return gsap.to('.barconfrm', {
      xPercent: -10,
      repeat: -1,
      duration: 2,
      ease: 'linear',
    });
  }
}
