import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponentModule } from './search/search-response.model';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterComponent, FilterPipe],
  imports: [
    SearchResultsComponentModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
