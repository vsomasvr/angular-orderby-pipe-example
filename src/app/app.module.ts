import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderByModule} from 'ng-orderby-pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderByModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
