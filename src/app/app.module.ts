import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from 'src/button/button.component';
import { InputFieldComponent } from 'src/input-field/input-field.component';
import { CheckboxComponent } from '../checkbox';
import { InputNumberComponent } from '../input-number/input-number.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent,
    InputNumberComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CheckboxComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
