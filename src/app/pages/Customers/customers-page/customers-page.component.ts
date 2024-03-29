import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controller';
import { Category } from 'src/app/components/search-bar/category';
import { CustomerService } from '../costumers.service';
import { Customer } from '../customer';


@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customersRowData: Array<Customer> =[];
  customers: Array<Customer> = [];
  categories: Array<Category> = [
    {name: 'First Name', value: 'firstName'},
    {name: 'Last Name', value: 'lastName'},
    {name: 'Email', value: 'email'},
    {name: 'Phone', value: 'phone'},
    {name: 'Note', value: 'notes'},
  ];

  controllers: Array<Controller> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon: 'fa fa-align-justify', value: 'bigfolder' },
  ];
  display: string = 'table';
  dataReceived: boolean = false;
  unsubscribeGetAll: Function = () => {};
  

  constructor(private CS: CustomerService) {}

  onSearch(array: Customer[]){
    this.customers = array;
  }

  deleteCustomer(array: Array<Customer>) {
    this.customersRowData = array;
    this.customers = this.customersRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit() {
    this.CS.getAll((customers: Customer[], unsubscribeGetAll: Function) =>{
      this.customersRowData = customers;
    this.customers = this.customersRowData;
    this.dataReceived = true;
    this.unsubscribeGetAll = unsubscribeGetAll;
    });
    
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
}