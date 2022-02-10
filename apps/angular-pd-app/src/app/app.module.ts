import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RxjsPdModule } from "./rxjs-pd/rxjs-pd.module";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RxjsPdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
