import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { DblClickComponent } from './dbl-click/dbl-click.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCounterComponent,
    DblClickComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
