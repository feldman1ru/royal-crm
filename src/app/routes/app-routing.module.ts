import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftTopNavComponent } from '../layout/header/top-nav/left-top-nav/left-top-nav.component';
import { LoggedComponent } from '../layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from '../layout/header/top-nav/right-top-nav/not-logged/not-logged.component';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'customers', component: CustomersPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'about', component: PageNotFoundComponent},
  // { path: 'signup', component: NotLoggedComponent},
  // { path: 'login', component: LoggedComponent},
  // { path: 'logout', component: LoggedComponent},
  { path: '**', component:PageNotFoundComponent },
  // { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}