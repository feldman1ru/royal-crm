import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../costumers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [
  ]
})
export class NewCustomerComponent{

  constructor(private CS: CustomerService, private routerServise: Router) {}

  onSubmit(customer: Customer){
    
      this.CS.add(customer)
      this.routerServise.navigate(['/customers'])
  }
 
}
