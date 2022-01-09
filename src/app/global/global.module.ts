import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { GlobalRoutingModule } from './global-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule
  ],
  exports: [
    BannerComponent,
  ]
})
export class GlobalModule { }
