import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-title',
  templateUrl: './auth-title.component.html',
  styleUrls: ['./auth-title.component.scss']
})
export class AuthTitleComponent {
  @Input() title: string = '';
}
