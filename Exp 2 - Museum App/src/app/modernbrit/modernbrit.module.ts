import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModernbritPageRoutingModule } from './modernbrit-routing.module';

import { ModernbritPage } from './modernbrit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModernbritPageRoutingModule
  ],
  declarations: [ModernbritPage]
})
export class ModernbritPageModule {}
