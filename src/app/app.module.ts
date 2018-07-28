import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './serverComponent/server.component';
import { SeversComponent } from './severs/severs.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SeversComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
