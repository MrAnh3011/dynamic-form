import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    DynamicFieldDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
