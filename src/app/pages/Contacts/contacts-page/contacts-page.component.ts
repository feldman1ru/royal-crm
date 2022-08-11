import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: []
})
export class ContactsPageComponent {

  contacts: Array<Contact> = [];
  constructor(private CS: ContactService) {
    this.contacts = CS.getAll();
    console.log(this.contacts);
  
    
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);

  }
}


