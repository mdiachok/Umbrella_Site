import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import {HomeComponent} from '../home/home.component';
import {BlogComponent} from '../home/blog/blog.component';
import {CompaniesListComponent} from '../home/companies-list/companies-list.component';
import {ServicesListComponent} from '../home/services-list/services-list.component';
import {NewsListComponent} from '../home/blog/news-list/news-list.component';
import {NewsItemComponent} from '../home/blog/news-list/news-item/news-item.component';
import {CompanyProfileComponent} from '../home/companies-list/company-profile/company-profile.component';
import {TrucksListComponent} from '../home/trucks/trucks-list/trucks-list.component';
import {TrucksItemComponent} from '../home/trucks/trucks-list/trucks-item/trucks-item.component';



export const ROUTES:  Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsItemComponent },
  { path: 'services/:id', component: ServicesListComponent},
  { path: 'companies/:id', component: CompanyProfileComponent },
  { path: 'trucks-list', component: TrucksListComponent },
  { path: 'trucks/:id', component: TrucksItemComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [
  ],
  declarations: [
    HomeComponent,
    BlogComponent,
    CompaniesListComponent,
    ServicesListComponent
  ]
})
export class RoutingModule { }
