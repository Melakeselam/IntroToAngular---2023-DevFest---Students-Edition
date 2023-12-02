import { Component, Input } from '@angular/core';

@Component({
  selector: 'display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {

  @Input() user!: string;

}
