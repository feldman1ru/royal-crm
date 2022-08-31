import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/componets/search-bar/category';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: []
})
export class ContactsPageComponent implements OnInit {
  contactsData: Array<Contact> = [];
  contacts: Array<Contact> = [];
  categpries: Array<Category> = [{name: 'First Name', value: 'firstName'},{name: 'Last Name', value: 'lastName'}];
  table: boolean = true;
  folder: boolean = false;

  constructor(private CS: ContactService) {
    this.contacts = CS.getAll();
  }

  onSearch(array: Contact[]){
    this.contacts = array;
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.contacts = this.CS.getAll()
  }

  ngOnInit(): void {
    this.contactsData = this.CS.getAll();
    this.contacts = [...this.contactsData];
  }

  showTable(){
    this.folder = false;
    this.table = true;
  }
  showFolder(){
    this.folder = true;
    this.table = false;

  }
}


  
 

