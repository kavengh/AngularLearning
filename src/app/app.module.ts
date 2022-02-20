import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared.module';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // added reactive forms
    ReactiveFormsModule,
    // added these two new modules that will house client and company respectively
    ClientModule,
    CompanyModule,
    // here we can now add that searchformcomp back
    SharedModule,
    // all of the ui components
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
