import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RandomArrayComponent } from './random-array/random-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomArrayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
