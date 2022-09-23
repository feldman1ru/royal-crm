import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent implements OnInit {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() customer: Customer = {
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
      zip: 0,
    },
    notes: '',
  };

  @Input() btnText: string = 'submit'

  ngOnInit(){
    
}

  onSubmit({ valid, value }: NgForm) { 
    if (valid) this.submit.emit(value);
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
        zip: 0,
      },
      notes: '',
    });
    this.reset.emit();
  }
}

