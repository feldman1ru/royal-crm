import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: []
})
export class ContactDetailsComponent implements OnInit {
  
  contact: Contact | void = undefined;
  constructor( private router: ActivatedRoute, private CS: ContactService) {}

  ngOnInit(): void {

    this.router.paramMap.subscribe((param: ParamMap)=> {
      const id = param.get('id');
      
      const contact = this.CS.getContact(id!);
      if (contact) this.contact = contact; 
    })
  }
  
}
