import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpPollingComponent } from './02-http-polling/http-polling.component';
import { TypeAheadComponent } from './01-type-ahead/type-ahead.component';



@NgModule({
  declarations: [
    HttpPollingComponent,
    TypeAheadComponent
  ],
  exports: [
    TypeAheadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsPdModule { }
