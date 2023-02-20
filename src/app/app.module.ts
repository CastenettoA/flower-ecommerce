import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CollectionsMenuComponent } from './components/collections-menu/collections-menu.component';
import { CollectionComponent } from './components/collection/collection.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductComponent } from './components/product/product.component';
import { StripsHtmlTagPipe } from './pipes/stripsHtmlTag';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsMenuComponent,
    CollectionComponent,
    Page404Component,
    ProductComponent,
    StripsHtmlTagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,

    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
