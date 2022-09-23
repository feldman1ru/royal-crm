import { Component, Input } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-big-folder',
  templateUrl: './customer-big-folder.component.html',
  styleUrls: []
})
export class CustomerBigFolderComponent {
  @Input() customers: Array<Customer> = []
  

}
