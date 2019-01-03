import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/*import { UserComponent } from './user/user.component';*/

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
/*import { AdminComponent } from './admin/admin.component';*/
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    /*UserComponent,*/
    /*AdminComponent,*/
    
  ],
  imports: [
    BrowserModule,
    routing,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
