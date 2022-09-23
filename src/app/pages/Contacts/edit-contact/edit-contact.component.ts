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
    this.CS.edit(contact, this.id!, ()=> this.router.navigate(['/contacts']));
  }

  resetForm() {
    this.CS.getContact(this.id!, (contact : Contact) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;
      this.CS.getContact(id!, (contact: Contact) => {
        const fireBaseTime = new Date(
          contact.birthday.seconds * 1000 + contact.birthday.nanoseconds / 1000000,
        );
        const newdate = fireBaseTime.toDateString();
        if(contact.birthday){
          contact.birthday = newdate;
          contact.birthday = new Date(newdate).toLocaleDateString("en-CA")
        }
        this.contact = contact;
        this.createdAt = contact.createdAt;
      });
    });
  }

}
