import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';







@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    PrimeNgModule,
    CommonModule,
    MenubarModule
  ]
})
export class SharedModule { }
