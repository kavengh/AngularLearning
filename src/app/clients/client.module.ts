import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { CustomMaterialModule } from '../custom-material.module';

/**
 * Here we will house all of our client related components and this will then allow us to
 * export this entire module into out app component. Also note that we have SharedModule as
 * an import which will allow us to get access to other components, services, etc we might need.
 */

@NgModule({
  // now we can add all of the components we made
  declarations: [ClientFormComponent, ClientPageComponent],
  // and since we want to use that sharedformcomp here we need to import the sharedmodule to get access
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule,
  ],
})
export class ClientModule {}
