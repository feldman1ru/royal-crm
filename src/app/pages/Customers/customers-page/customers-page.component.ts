import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../costumers.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent {
  customers: Array<Customer> = [];

  constructor(CS: CustomerService) {
    this.customers = CS.getAll();
  }
}