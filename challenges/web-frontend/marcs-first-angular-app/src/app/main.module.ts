import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main.component';
import { LoginComponent } from './components/login-page/login-page.component';
import { CarOverviewPageComponent } from './components/car-overview-page/car-overview-page.component';
import { CarPreviewComponent } from './components/car-preview/car-preview.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarOverviewPageComponent,
    CarPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
