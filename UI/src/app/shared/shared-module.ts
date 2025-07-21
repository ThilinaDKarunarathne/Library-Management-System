import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material-module';
import { PageHeader } from './components/page-header/page-header';
import { PageFooter } from './components/page-footer/page-footer';
import { PageSideNav } from './components/page-side-nav/page-side-nav';



@NgModule({
  declarations: [
    PageHeader,
    PageFooter,
    PageSideNav
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    PageHeader,
    PageFooter,
    PageSideNav
  ]
})
export class SharedModule { }
