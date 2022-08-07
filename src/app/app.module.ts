import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { CustomersPageComponent } from './pages/Customers/customers-page/customers-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from './layout/header/top-nav/right-top-nav/not-logged/not-logged.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TopNavLinkComponent } from './layout/header/top-nav/top-nav-link/top-nav-link.component';
import { RandomNamPipe } from './pipes/random-nam.pipe';
import { TextCapitalPipe } from './pipes/string-pipe.pipe';
import { SideNavLinkComponent } from './layout/main/side-nav-link/side-nav-link.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ContactsPageComponent } from './pages/Contacts/contacts-page/contacts-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { ContactComponent } from './pages/Contacts/contact/contact.component';
import { NewContactComponent } from './pages/Contacts/new-contact/new-contact.component';
import { ContactsFormComponent } from './pages/Contacts/contacts-form/contacts-form.component';




@NgModule({
  declarations: [AppComponent, CustomersPageComponent, HeaderComponent, FooterComponent, MainComponent, SideNavComponent, LogoComponent, HamburgerComponent, LeftTopNavComponent, RightTopNavComponent, LoggedComponent, NotLoggedComponent, PageHeaderComponent, TopNavLinkComponent, RandomNamPipe, TextCapitalPipe, SideNavLinkComponent, ErrorPageComponent, ContactsPageComponent, PageNotFoundComponent, LoginPageComponent, NewCustomerComponent, CustomerFormComponent, ContactComponent, NewContactComponent, ContactsFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
