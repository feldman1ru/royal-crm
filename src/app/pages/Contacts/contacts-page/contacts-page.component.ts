import { Component, Input, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controller';
import { Category } from 'src/app/components/search-bar/category';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: []
})
export class ContactsPageComponent implements OnInit {
  contactsRowData: Array<Contact> = [];
  contacts: Array<Contact> = [];
  categpries: Array<Category> = [{name: 'First Name', value: 'firstName'},{name: 'Last Name', value: 'lastName'},{name: 'Email', value: 'email'},
  {name: 'Phone', value: 'phone'},];

  controllers: Array<Controller> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon: 'fa fa-align-justify', value: 'bigfolder' },
  ];
  display: string = 'table';
  dataReceived: boolean = false;
  unsubscribeGetAll: Function = () => {};
  
  constructor(private CS: ContactService) {}

  onSearch(array: Contact[]){
    this.contacts = array;
  }

  deleteContact(array: Array<Contact>) {
    this.contactsRowData = array;
    this.contacts = this.contactsRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit(): void {

    this.CS.getAll((contacts: Contact[], unsubscribeGetAll: Function) =>{
    this.contactsRowData = contacts;
    this.contacts = this.contactsRowData;
    this.dataReceived = true;
    this.unsubscribeGetAll = unsubscribeGetAll;
    });
    
    
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }


}


  
 

