import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './home/blog/blog.component';
import { NewsListComponent } from './home/blog/news-list/news-list.component';
import { NewsItemComponent } from './home/blog/news-list/news-item/news-item.component';
import { CompaniesListComponent } from './home/companies-list/companies-list.component';
import { CompanyProfileComponent } from './home/companies-list/company-profile/company-profile.component';
import { TrucksTypeListComponent } from './home/trucks/trucks-type-list/trucks-type-list.component';
import { TrucksListComponent } from './home/trucks/trucks-list/trucks-list.component';
import { TrucksItemComponent } from './home/trucks/trucks-list/trucks-item/trucks-item.component';
import { ServicesListComponent } from './home/services-list/services-list.component';
import { ServiceItemComponent } from './home/services-list/service-item/service-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    NewsListComponent,
    NewsItemComponent,
    CompaniesListComponent,
    CompanyProfileComponent,
    TrucksTypeListComponent,
    TrucksListComponent,
    TrucksItemComponent,
    ServicesListComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
