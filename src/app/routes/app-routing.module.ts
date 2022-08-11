import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftTopNavComponent } from '../layout/header/top-nav/left-top-nav/left-top-nav.component';
import { LoggedComponent } from '../layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from '../layout/header/top-nav/right-top-nav/not-logged/not-logged.component';
import { ContactDetailsComponent } from '../pages/Contacts/contact-details/contact-details.component';
import { ContactComponent } from '../pages/Contacts/contact/contact.component';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { NewContactComponent } from '../pages/Contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-costumer', component: NewCustomerComponent },
  { path: 'customers/costumer-details/:id', component: CustomerDetailsComponent },
  { path: 'contacts', component: ContactsPageComponent},
  { path: 'contacts/new-contact', component: NewContactComponent},
  { path: 'contacts/custumer-details', component: CustomerDetailsComponent},
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent },
  { path: 'about', component: PageNotFoundComponent},
  { path: '**', component:PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}