import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent implements OnInit {
  currentRoute: any;
  setOrderType = false;
  doc: any;
  menu = true;

  constructor(private router: Router) {
    console.log(router.url);
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: any }) => {
        this.currentRoute = event.url;
        console.log(this.currentRoute);

        switch (this.currentRoute) {
          case '/registration':
            this.menu = false;
            break;
          case '/login':
            this.menu = false;
            break;
          case '/otp-verification':
            this.menu = false;
            break;
          case '/track':
            this.menu = false;
            break;
          case '/apply-coupon':
            this.menu = false;
            break;
          case '/location':
            this.menu = false;
            break;
          case '/select-location':
            this.menu = false;
            break;
          case '/manage-address':
            this.menu = false;
            break;
          case '/add-address':
            this.menu = false;
            break;
          case '/faq':
            this.menu = false;
            break;
          case '/policy':
            this.menu = false;
            break;
          case '/disclaimer':
            this.menu = false;
            break;
          case '/search':
            this.menu = false;
            break;

          default:
            this.menu = true;
        }
      });
  }

  ngOnInit(): void {
    
    if (!this.setOrderType) {
      document.getElementById('order-type')?.click();
      this.setOrderType = true;
    }

  }

}
