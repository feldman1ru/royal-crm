import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styles: [
  ]
})
export class ContactsFormComponent {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() contact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
    },
    birthday: new Date,
    
  };
  
  @Input() btnText: string = 'submit';
  

  onSubmit({ valid, value }: NgForm) {
    value.birthday = new Date(value.birthday);
    if(valid)this.submit.emit(value);
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: 0,
      },
      birthday: new Date,
    });
    this.reset.emit();
  }
}

