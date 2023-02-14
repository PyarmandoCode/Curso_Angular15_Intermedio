import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Repaso2Component } from './components/repaso2/repaso2.component';
import { ExtraccionComponent } from './components/extraccion/extraccion.component';


@NgModule({
  declarations: [
    AppComponent,
    Repaso2Component,
    ExtraccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
