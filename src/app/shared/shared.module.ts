import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../search/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-material.module';

/* 
The purpose of this module is to house all of the components and etc that we want to share with
other modules. This will allow us to keep our imports neat and also will allow us to import metadata
into multiple modules that will have access to different component trees.
*/

@NgModule({
  // declared the searchformcomp and then we exported
  declarations: [SearchFormComponent],
  // we also need to import the formsmodule since the searchformcomp uses it
  // adding the CreateMaterials module so we can share the ui components with everyone :D
  imports: [CommonModule, FormsModule, CustomMaterialModule],
  // and now that this is being exported we can remove it form the app module and just import this module
  // for ex now that we have exported this component, our client components can use this since we import this module in the client module
  exports: [SearchFormComponent],
})
export class SharedModule {}
