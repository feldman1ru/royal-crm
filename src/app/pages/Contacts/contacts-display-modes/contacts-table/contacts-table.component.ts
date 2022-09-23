import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../contact';
import { ContactService } from '../../contacts.servise';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: []
})
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
  @Output() onDeleteContact= new EventEmitter();

  constructor(private CS: ContactService) {}

   deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);

    this.CS.getAll((contacts: Contact[]) =>{
      this.contacts = contacts;
      this.onDeleteContact.emit(this.contacts);
      
    });
  }
}
