import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AcaoComponent } from './acao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AcaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AcaoComponent]
})
export class AppModule { }
