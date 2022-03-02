import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientEditPageComponent } from './client-edit-page/client-edit-page.component';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';

/**
 * Here we will house all of our client related components and this will then allow us to
 * export this entire module into out app component. Also note that we have SharedModule as
 * an import which will allow us to get access to other components, services, etc we might need.
 */

@NgModule({
  // now we can add all of the components we made
  declarations: [ClientFormComponent, ClientPageComponent, ClientDetailComponent, ClientDetailsPageComponent, ClientEditPageComponent, ClientSearchPageComponent],
  // and since we want to use that sharedformcomp here we need to import the sharedmodule to get access
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule,
  ],
})
export class ClientModule {}
