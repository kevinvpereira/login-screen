import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthTitleComponent } from './components/auth-title/auth-title.component';
import { SharedModule } from '../shared/shared.module';
import { AuthSubtitleComponent } from './components/auth-subtitle/auth-subtitle.component';
import { AuthGoogleComponent } from './components/auth-google/auth-google.component';
import { AuthDividerComponent } from './components/auth-divider/auth-divider.component';
import { AuthLinkComponent } from './components/auth-link/auth-link.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthLayoutComponent,
    AuthTitleComponent,
    AuthSubtitleComponent,
    AuthGoogleComponent,
    AuthDividerComponent,
    AuthLinkComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
