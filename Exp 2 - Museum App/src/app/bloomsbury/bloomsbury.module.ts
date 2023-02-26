import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloomsburyPageRoutingModule } from './bloomsbury-routing.module';

import { BloomsburyPage } from './bloomsbury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloomsburyPageRoutingModule
  ],
  declarations: [BloomsburyPage]
})
export class BloomsburyPageModule {}
