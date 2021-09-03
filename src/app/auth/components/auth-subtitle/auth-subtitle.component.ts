import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-subtitle',
  templateUrl: './auth-subtitle.component.html',
  styleUrls: ['./auth-subtitle.component.scss']
})
export class AuthSubtitleComponent {

  @Input() title: string = '';
  
}
