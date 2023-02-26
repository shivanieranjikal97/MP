import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldmasterPageRoutingModule } from './oldmaster-routing.module';

import { OldmasterPage } from './oldmaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldmasterPageRoutingModule
  ],
  declarations: [OldmasterPage]
})
export class OldmasterPageModule {}
