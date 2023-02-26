import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallerysPageRoutingModule } from './gallerys-routing.module';
import { GallerysPage } from './gallerys.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallerysPageRoutingModule
  ],
  declarations: [GallerysPage]
})
export class GallerysPageModule {}
