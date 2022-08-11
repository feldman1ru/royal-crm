import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      _id: '1',
      firstName: 'Ruslan',
      lastName: 'Feldman',
      email: 'ruslan@gmail.com',
      phone: '050-0000000',
      birthday: new Date('10 04 1984'),
      age: 38,
      address: {
        country: 'israel',
        city: 'herzliya',
        street: 'rotshild',
        houseNumber: 4,
      },
      createdAt: new Date,
    }
    
  ];

  getAll(): Contact[] {
   
    return this.contacts;
  }

  add(contact: Contact){
    contact._id = String(this.contacts.length + 1 ) + new Date() + Math.random();
    return this.contacts.push({...contact, createdAt: new Date() })
  }
  delete(id:string){
    let contactIndex = this.contacts.findIndex((contact: Contact) => contact._id === id);
    if (contactIndex === -1) return;
    this.contacts.splice(contactIndex, 1);
  }
  getContact(id: string): Contact | void {
    return this.contacts.find((contact: Contact)=> contact._id === id )
  }
}