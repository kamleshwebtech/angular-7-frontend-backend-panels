import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductListComponent } from './components/product/list/list.component';
import { AddProductComponent } from './components/product/add/add.component';

const routes: Routes = [
	{ 
		path: 'admin',
		component: AdminComponent,
		children: [
			{ path: '', component: ProductListComponent },
			{ path: 'product', component: ProductListComponent },
			{ path: 'product/list', component: ProductListComponent },
			{ path: 'product/add', component: AddProductComponent }
		]
	}
];

export const AdminRouting = RouterModule.forRoot(routes);