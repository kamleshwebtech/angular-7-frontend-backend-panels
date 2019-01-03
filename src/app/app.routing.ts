import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';

const routes: Routes = [
	{ path: '', redirectTo: '/user', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);