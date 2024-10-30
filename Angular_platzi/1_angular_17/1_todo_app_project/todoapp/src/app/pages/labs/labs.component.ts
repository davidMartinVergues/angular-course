import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  greet = 'Hi there! We are in our own lab, lets play with Angular!';

  tasks = [ 
    'instalar Angular CLI',
    'Crear componentes',
    'Probar el proyecto',
  ]

}
