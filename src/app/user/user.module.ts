import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';

import { UserRouting } from './user.routing';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    UserRouting
  ],
  providers: []/*,
  bootstrap: [UserComponent]*/
})
export class UserModule { }
