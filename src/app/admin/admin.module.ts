import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { ProductListComponent } from './components/product/list/list.component';
import { AddProductComponent } from './components/product/add/add.component';

import { AdminRouting } from './admin.routing';

@NgModule({
  declarations: [
    AdminComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AdminRouting
  ],
  providers: []
})
export class AdminModule { }
