import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniaturePageRoutingModule } from './miniature-routing.module';

import { MiniaturePage } from './miniature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniaturePageRoutingModule
  ],
  declarations: [MiniaturePage]
})
export class MiniaturePageModule {}
