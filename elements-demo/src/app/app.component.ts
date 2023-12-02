import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elements-demo';
  username!: string;
  password!: string;
  validate: boolean = false;

  onValidate() {
    this.validate = !this.validate;
  }
}
