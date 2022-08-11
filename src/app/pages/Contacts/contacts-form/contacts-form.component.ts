import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styles: [
  ]
})
export class ContactsFormComponent {
  

  @Output() sumbit = new EventEmitter();

  onSudmit({valid, value}: NgForm){
    
    if(valid){
      this.sumbit.emit(value)
      
    }
  }
  resetForm(form: NgForm){
    form.resetForm()

  }

}
