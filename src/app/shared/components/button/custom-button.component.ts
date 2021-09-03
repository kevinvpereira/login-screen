import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() label: string = 'Save';
  @Input() type: 'submit' | 'click' = 'submit';

  constructor() { }

  ngOnInit(): void {
  }

}
