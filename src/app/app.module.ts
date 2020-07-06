import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { DemoMaterialModule} from './modules/mat.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeOverviewExample } from './comps/component1/component1.component';
import { Component2Component } from './comps/component2/component2.component';
import { Component3Component } from './comps/component3/component3.component';
import { InputNameComponent } from './comps/input-name/input-name.component';
import { PipeSearchPipe } from './mypipes/pipe-search.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BadgeOverviewExample  ,
    Component2Component,
    Component3Component,
    InputNameComponent,
    PipeSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
