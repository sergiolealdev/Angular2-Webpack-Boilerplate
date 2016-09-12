import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { InputForm } from './form.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InputForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
