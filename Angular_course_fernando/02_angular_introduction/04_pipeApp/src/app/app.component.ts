import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedModule} from "./shared/shared.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SharedModule,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = '04_pipeApp';
}
