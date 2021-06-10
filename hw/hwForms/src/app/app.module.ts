import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { UsersComponent } from './components/users/users.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    UsersComponent,
    ReactiveFormComponent,
    SelectFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
