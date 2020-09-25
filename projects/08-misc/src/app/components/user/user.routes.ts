import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewUserComponent } from '../user/new-user.component';
import { EditUserComponent } from '../user/edit-user.component';
import { DetailUserComponent } from '../user/detail-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'detail', component: DetailUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'edit' }
 
];
