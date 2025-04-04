import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  exports:[MenuModule,MenubarModule,ToastModule,ButtonModule,CommonModule,InputTextModule,AvatarModule,BadgeModule,RouterModule, CardModule,FieldsetModule, PanelModule]
})
export class PrimeNgModule { }
