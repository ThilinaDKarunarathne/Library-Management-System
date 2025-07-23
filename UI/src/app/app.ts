import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material-module';
import { SharedModule } from './shared/shared-module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ MaterialModule,SharedModule],
  standalone: true,
  providers: [
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UI');
}
