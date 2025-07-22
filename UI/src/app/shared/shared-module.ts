import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material-module';
import { PageHeader } from './components/page-header/page-header';
import { PageFooter } from './components/page-footer/page-footer';
import { PageSideNav } from './components/page-side-nav/page-side-nav';
import { RouterModule } from '@angular/router';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageHeader,
    PageFooter,
    PageSideNav,
    PageNotFound
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PageHeader,
    PageFooter,
    PageSideNav,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
