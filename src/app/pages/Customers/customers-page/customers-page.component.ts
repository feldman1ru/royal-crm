import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/componets/search-bar/category';
import { CustomerService } from '../costumers.service';
import { Customer } from '../customer';


@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customersData: Array<Customer> =[];
  customers: Array<Customer> = [];
  categories: Array<Category> = [
    {name: 'First Name', value: 'firstName'},{name: 'Last Name', value: 'lastName'}
  ];

  constructor(private CS: CustomerService) {
   
  }

  onSearch(array: Customer[]){
    this.customers = array;
  }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.customers = this.CS.getAll();
  }
  ngOnInit(): void {
    this.customersData = this.CS.getAll();
    this.customers = [...this.customersData];
  }

}