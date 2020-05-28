import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {KeywordFormComponent} from './component/keyword-form/keyword-form.component';
import {OffersListComponent} from './component/offerslist/offers-list.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersListComponent,
    KeywordFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
