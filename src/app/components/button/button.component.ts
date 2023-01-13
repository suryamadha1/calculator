import { Component, Input } from '@angular/core';
import { ButtonProperties } from 'src/app/data/data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  buttonProperties: ButtonProperties | undefined;

  constructor() {}
}
