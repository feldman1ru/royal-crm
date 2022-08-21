import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from '../pages/Contacts/contact-details/contact-details.component';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { EditContactComponent } from '../pages/Contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/Contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  { path: 'customers/customer-details/:id',component: CustomerDetailsComponent },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contacts/new-contact', component: NewContactComponent},
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent },
  { path: 'contacts/edit-contact/:id', component: EditContactComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ContactDetailsComponent } from '../pages/Contacts/contact-details/contact-details.component';
// import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
// import { NewContactComponent } from '../pages/Contacts/new-contact/new-contact.component';
// import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
// import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
// import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
// import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
// import { LoginPageComponent } from '../pages/login-page/login-page.component';
// import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

// const routes: Routes = [
//   { path: '', component: LoginPageComponent },
//   { path: 'customers', component: CustomersPageComponent },
//   { path: 'customers/new-costumer', component: NewCustomerComponent },
//   { path: 'customers/costumer-details/:id', component: CustomerDetailsComponent },
//   { path: 'customers/edit-custumer/:id', component: EditCustomerComponent}, 
//   { path: 'contacts', component: ContactsPageComponent},
//   { path: 'contacts/new-contact', component: NewContactComponent},
//   { path: 'contacts/custumer-details', component: CustomerDetailsComponent},
//   { path: 'contacts/contact-details/:id', component: ContactDetailsComponent },
//   { path: 'about', component: PageNotFoundComponent},
//   { path: '**', component:PageNotFoundComponent },


// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}