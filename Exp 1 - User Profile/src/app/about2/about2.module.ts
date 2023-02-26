import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { About2PageRoutingModule } from './about2-routing.module';

import { About2Page } from './about2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    About2PageRoutingModule
  ],
  declarations: [About2Page]
})
export class About2PageModule {}
