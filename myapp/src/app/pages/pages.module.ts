import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProductsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ProductsComponent,
    AboutUsComponent
  ]
})
export class PagesModule { }
