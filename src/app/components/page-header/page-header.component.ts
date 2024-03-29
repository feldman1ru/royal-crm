import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styles: [],
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() bgColor: string = 'alert-success rounded-3 p-2';
  @Input() details: string = '';
  
}