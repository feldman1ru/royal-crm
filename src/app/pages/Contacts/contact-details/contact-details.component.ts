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
  createAt: any;
  contact: Contact | void = undefined;
  constructor(private AR: ActivatedRoute, private CS: ContactService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getContact(id!,
        (contact: Contact ) => {this.contact = contact 
        this.createAt = new Date(contact.createdAt?.seconds * 1000);
      }
      );
    });
  }
  
}
