import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { USER_ROUTES } from "./components/user/user.routes";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'user/:ids', 
        component: UserComponent,
         children: USER_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];


export const APP_ROUTING = RouterModule.forRoot(routes);
