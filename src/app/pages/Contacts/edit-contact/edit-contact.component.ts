import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contacts.servise';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: []
})
export class EditContactComponent implements OnInit {

  contact: Contact | void = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;

  constructor(
    private CS: ContactService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(contact: Contact) {
    contact.createdAt = this.createdAt!;
    contact._id = this.id!;
    this.CS.edit(contact);
    this.router.navigate(['/contacts']);
  }

  resetForm() {
    console.log('in reset form father');

    this.CS.getContact(this.id!, ({ ...contact }: Contact) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;
    
      this.CS.getContact(id!, ({ ...contact }: Contact) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
      });
    });
  }

}
