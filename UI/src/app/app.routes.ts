import { Routes } from '@angular/router';
import { PageNotFound } from './shared/components/page-not-found/page-not-found';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';

export const routes: Routes = [
    {path: 'login',component: Login},
    {path: 'register',component: Register},
    { path: '**', component: PageNotFound },

];
