import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import {HijoComponent} from './hijo/hijo.component';
import { ContadorComponent } from './contador/contador.component';
import { OutputsComponent } from './outputs/outputs.component';
import { OutputsPadreComponent } from './outputs-padre/outputs-padre.component';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './directives/estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from './pipes/mi-pipe-personalizado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ContadorComponent,
    OutputsComponent,
    OutputsPadreComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    MiPipePersonalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
