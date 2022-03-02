import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyDetailsPageComponent } from './company-details-page/company-details-page.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanySearchPageComponent } from './company-search-page/company-search-page.component';

@NgModule({
  declarations: [CompanyPageComponent, CompanyDetailComponent, CompanyDetailsPageComponent, CompanyFormComponent, CompanyListComponent, CompanySearchPageComponent],
  imports: [CommonModule],
})
export class CompanyModule {}
