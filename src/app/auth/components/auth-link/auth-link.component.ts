import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.scss']
})
export class AuthLinkComponent {
  @Input() url: string = "/auth/sign-in";
  @Input() text: string = "Novo no";
  @Input() link: string = "Crie uma conta";

}
