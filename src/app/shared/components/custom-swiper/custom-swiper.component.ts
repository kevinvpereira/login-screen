import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'custom-swiper',
  templateUrl: './custom-swiper.component.html',
  styleUrls: ['./custom-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomSwiperComponent implements OnInit {

  @Input() imagesSrc: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
