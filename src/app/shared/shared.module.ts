import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSwiperComponent } from './components/custom-swiper/custom-swiper.component';
import { CustomButtonComponent } from './components/button/custom-button.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomSwiperComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports:[
    CustomSwiperComponent,
    FormsModule,
    ReactiveFormsModule,
    CustomButtonComponent
  ]
})
export class SharedModule { }
