import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Controller } from './controller';

@Component({
  selector: 'app-display-mode-controllers',
  templateUrl: './display-mode-controllers.component.html',
  styleUrls: []
})
export class DisplayModeControllersComponent {


  @Input() controllers: Array<Controller> = [];
  @Output() onChangeDisplay = new EventEmitter();

  onChangeDisplayMode(display: string) {
    this.onChangeDisplay.emit(display);
  }

}
