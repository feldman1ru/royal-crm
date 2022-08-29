import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contacts-folder',
  templateUrl: './contacts-folder.component.html',
  styleUrls: []
})
export class ContactsFolderComponent {
  @Input() contacts: Array<Contact> = []
 

}
