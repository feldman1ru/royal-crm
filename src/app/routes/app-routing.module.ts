import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactDetailsComponent } from '../pages/Contacts/contact-details/contact-details.component';
import { ContactsPageComponent } from '../pages/Contacts/contacts-page/contacts-page.component';
import { EditContactComponent } from '../pages/Contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/Contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/Customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/Users/login-page/login-page.component';
import { SingUpPageComponent } from '../pages/Users/sing-up-page/sing-up-page.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'customers', component: CustomersPageComponent, canActivate : [AuthGuard] },
  { path: 'customers/new-customer', component: NewCustomerComponent, canActivate : [AuthGuard] },
  { path: 'customers/customer-details/:id',component: CustomerDetailsComponent, canActivate : [AuthGuard] },
  { path: 'customers/edit-customer/:id', component: EditCustomerComponent, canActivate : [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent, canActivate : [AuthGuard] },
  { path: 'contacts/new-contact', component: NewContactComponent, canActivate : [AuthGuard]},
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent, canActivate : [AuthGuard] },
  { path: 'contacts/edit-contact/:id', component: EditContactComponent, canActivate : [AuthGuard] },
  { path: 'about', component: AboutComponent},
  { path: 'signup', component: SingUpPageComponent, canActivate: [LoggedGuard]},
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

