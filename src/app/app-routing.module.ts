import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { CompanyPageComponent } from './company/company-page/company-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Contains a set of objects that define the details of the Route
const routes: Routes = [
  {
    // when the browser loads a url with the path '/clients', it matches to the path property and the router knows to read from other properites in the matching path object.
    path: 'clients',
    // in this case after the path is matched, the Route module will take the value of the component property and load it into the main view of the component.
    component: ClientPageComponent,
  },
  // redirect to if the path was close
  {
    path: 'client',
    redirectTo: '/clients',
    pathMatch: 'full',
  },
  {
    // company routing object
    path: 'company',
    component: CompanyPageComponent,
  },
  // new object for each route we want to create
  {
    // this is an example of an empty route
    // in this case if the url was localhost:4200 meaning it was 'empty' then we would redirect to /clients path
    path: '',
    redirectTo: '/clients',
    // not to sure on this but i think it just means append  the client part and use that as the whole path
    pathMatch: 'full',
  },
  // wild card route if the url passed in is invalid, is run if no other paths are correct
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
/*The main change we’ve made is that we’ve created a new route. The first is the clients route, which will load ClientPageComponent (a smart component) into the view when called. If we run our application using ng serve, the application will run in the browser. If we then add /clients to the end of the URL of our application, it will load ClientPageComponent in the browser. */

@NgModule({
  // we have an array that has all of the routes (this is defined above), these routes are passed to the forRoot function in RouterModule. Then its exported out of AppRoutingModule and imported into our main AppModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
