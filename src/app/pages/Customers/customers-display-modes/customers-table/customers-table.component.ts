import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from '../../costumers.service';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: []
})
  export class CustomersTableComponent {
    @Input() customers: Customer[] = [];
    @Output() onDeleteCustomer = new EventEmitter();
  
    constructor(private CS: CustomerService) {}
  
    deleteCustomer(e: MouseEvent, id: string) {
      e.stopPropagation();
      this.CS.delete(id);
      this.CS.getAll((customers: Customer[]) =>{
        this.customers = customers;
        this.onDeleteCustomer.emit(this.customers);

      });
    }

}
