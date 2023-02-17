import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDiscosComponent } from './components/add-discos/add-discos.component';
import { DiscosDetailComponent } from './components/discos-detail/discos-detail.component';
import { DiscosListComponent } from './components/discos-list/discos-list.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AddDiscosComponent,
    DiscosDetailComponent,
    DiscosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
