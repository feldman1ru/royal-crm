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
import { LoginPageComponent } from './pages/Users/login-page/login-page.component';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { ContactComponent } from './pages/Contacts/contact/contact.component';
import { NewContactComponent } from './pages/Contacts/new-contact/new-contact.component';
import { ContactsFormComponent } from './pages/Contacts/contacts-form/contacts-form.component';
import { CustomerDetailsComponent } from './pages/Customers/customer-details/customer-details.component';
import { ContactDetailsComponent } from './pages/Contacts/contact-details/contact-details.component';
import { EditCustomerComponent } from './pages/Customers/edit-customer/edit-customer.component';
import { AgePipe } from './pipes/age.pipe';
import { EditContactComponent } from './pages/Contacts/edit-contact/edit-contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { CustomersTableComponent } from './pages/Customers/customers-display-modes/customers-table/customers-table.component';
import { CustomersFolderComponent } from './pages/Customers/customers-display-modes/customers-folder/customers-folder.component';
import { ContactsTableComponent } from './pages/Contacts/contacts-display-modes/contacts-table/contacts-table.component';
import { ContactsFolderComponent } from './pages/Contacts/contacts-display-modes/contacts-folder/contacts-folder.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { CustomerBigFolderComponent } from './pages/Customers/customers-display-modes/customer-big-folder/customer-big-folder.component';
import { ContactsBigFolderComponent } from './pages/Contacts/contacts-display-modes/contacts-big-folder/contacts-big-folder.component';
import { SingUpPageComponent } from './pages/Users/sing-up-page/sing-up-page.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsollogPipe } from './pipes/consollog.pipe';












@NgModule({
  declarations: [AppComponent, CustomersPageComponent, HeaderComponent, FooterComponent, MainComponent, SideNavComponent, LogoComponent, HamburgerComponent, LeftTopNavComponent, RightTopNavComponent, LoggedComponent, NotLoggedComponent, PageHeaderComponent, TopNavLinkComponent, RandomNamPipe, TextCapitalPipe, SideNavLinkComponent, ErrorPageComponent, ContactsPageComponent, PageNotFoundComponent, LoginPageComponent, NewCustomerComponent, CustomerFormComponent, ContactComponent, NewContactComponent, ContactsFormComponent, CustomerDetailsComponent, ContactDetailsComponent, EditCustomerComponent, AgePipe, EditContactComponent, SearchBarComponent, CustomersTableComponent,CustomersFolderComponent, ContactsTableComponent,ContactsFolderComponent, DisplayModeControllersComponent, CustomerBigFolderComponent, ContactsBigFolderComponent,SingUpPageComponent, LoaderComponent, AboutComponent, ConsollogPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
