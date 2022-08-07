import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: []
})
export class CustomerFormComponent {

  @Output() sumbit = new EventEmitter();

  onSudmit({valid, value}: NgForm){
    if(valid){
      this.sumbit.emit(value)
    }
  }
  resetForm(form: NgForm){
    form.reset()

  }
 
}
