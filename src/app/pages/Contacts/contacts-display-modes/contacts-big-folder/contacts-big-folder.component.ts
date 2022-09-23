import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contacts-big-folder',
  templateUrl: './contacts-big-folder.component.html',
  styleUrls: []
})
export class ContactsBigFolderComponent {

  @Input() contacts: Array<Contact> = []
  
}
