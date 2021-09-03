import { Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  path: string = '../../../../assets/imgs/auth/';
  imagesSrc: string[] = [
    `${this.path}slider-1.jpg`, 
    `${this.path}slider-2.jpg`,
    `${this.path}slider-3.jpg`,
    `${this.path}slider-4.jpg`
  ];
}
