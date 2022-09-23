
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../costumers.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [],
})
export class CustomerDetailsComponent implements OnInit {
  createAt: any;
  customer: Customer | void = undefined;
  constructor(private AR: ActivatedRoute, private CS: CustomerService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getCustomer(
        id!,
        (customer: Customer) => {this.customer = customer;
          this.createAt = new Date(customer.createdAt?.seconds * 1000);
        }
      );
    });
  }
}