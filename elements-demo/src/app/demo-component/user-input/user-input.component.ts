import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  @Input()
  inputType!: string;

  @Input()
  inputLabel!: string;

}
