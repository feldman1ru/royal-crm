import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../costumers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: []
})
export class CustomerDetailsComponent {

  customer: Customer | void = undefined;
  constructor( private router: ActivatedRoute, private CS: CustomerService) { }
  ngOnInit(): void {

    this.router.paramMap.subscribe((parm: ParamMap)=> {

      const id = parm.get('id');
      const customer = this.CS.getCustomer(id!);
      if(customer) this.customer = customer;
    });
  }
}
