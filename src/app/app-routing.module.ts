import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './clients/client-page/client-page.component';

// to add a new route we need to add it to the array
const routes: Routes = [
  // it will be in the form of an object {}
  {
    // need to specify the path
    path: 'clients',
    // now we need to ref what component we are routing
    component: ClientPageComponent,
  },
  {
    // this is an example of an empty route
    // in this case if the url was localhost:4200 meaning it was 'empty' then we would redirect to /clients path
    path: '',
    redirectTo: '/clients',
    // not to sure on this but i think it just means append  the client part and use that as the whole path
    pathMatch: 'full',
  },
];
/*The main change we’ve made is that we’ve created a new route. The first is the clients route, which will load ClientPageComponent (a smart component) into the view when called. If we run our application using ng serve, the application will run in the browser. If we then add /clients to the end of the URL of our application, it will load ClientPageComponent in the browser. */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
