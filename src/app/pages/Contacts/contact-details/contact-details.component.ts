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
  constructor(private AR: ActivatedRoute, private CS: ContactService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.contact = this.CS.getContact(id!,
        (contact: Contact | void) => (this.contact = contact)
      );
    });
  }
  
}
