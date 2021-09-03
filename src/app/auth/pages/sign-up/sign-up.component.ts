import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signIn(): void{
    if (this.form?.invalid){
      return;
    }

    console.log(this.form?.value);
  }

  get nameField(){
    return this.form.get('name');
  }

  get emailField(){
    return this.form.get('email');
  }

  get passwordField(){
    return this.form.get('password');
  }
}
