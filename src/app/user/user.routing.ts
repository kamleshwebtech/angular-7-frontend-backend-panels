import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
	{ 
		path: 'user',
		component: UserComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'about-us', component: AboutUsComponent }
		]
	}
];

export const UserRouting = RouterModule.forRoot(routes);