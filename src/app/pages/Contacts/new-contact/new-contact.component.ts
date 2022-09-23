import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: [
  ]
})
export class NewContactComponent {

  constructor(private CS: ContactService, private routerServise: Router) {}

  onSubmit(contact: Contact){
    
      this.CS.add(contact,()=> this.routerServise.navigate(['/contacts']));
      
  }

}
