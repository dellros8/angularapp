import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TacolistComponent } from './taco-list/taco-list.component';
import { BeerlistComponent } from './beerlist/beerlist.component';

import { BeerService } from "./beer.service";
import { TacoService } from "./taco.service";
import { BeerComponent } from './beer/beer.component';
import { BeerpicturesComponent } from './beerpictures/beerpictures.component';

@NgModule({
  declarations: [
    AppComponent,
    TacolistComponent,
    BeerlistComponent,
    BeerComponent,
    BeerpicturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BeerService, TacoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
