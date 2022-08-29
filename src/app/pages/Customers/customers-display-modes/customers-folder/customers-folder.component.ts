import { Component, Input} from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customers-folder',
  templateUrl: './customers-folder.component.html',
  styleUrls: []
})
export class CustomersFolderComponent {
  @Input() customers: Array<Customer> = []
  
}
