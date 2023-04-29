import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CsearchComponent } from './csearch/csearch.component';
import { AppRoutingModule } from './app-routing.module';
import { GsearchComponent } from './gsearch/gsearch.component';
import { IsearchComponent } from './isearch/isearch.component';
import { CocktailcardComponent } from './cocktailcard/cocktailcard.component';
import { SearchComponent } from './search/search.component';
import { CoverviewComponent } from './coverview/coverview.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      CsearchComponent,
      GsearchComponent,
      IsearchComponent,
      CocktailcardComponent,
      SearchComponent,
      CoverviewComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
