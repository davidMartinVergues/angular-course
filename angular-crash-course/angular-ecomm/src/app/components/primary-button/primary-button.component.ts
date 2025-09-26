import { Component, input, output, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  label = input('');
  btnClicked = output();

  handleButtonClick(){
    this.btnClicked.emit()

  }

}
