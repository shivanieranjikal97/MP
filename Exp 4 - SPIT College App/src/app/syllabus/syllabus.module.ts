import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyllabusPageRoutingModule } from './syllabus-routing.module';
import { ExpandableComponent } from '../expandable/expandable.component';
import { SyllabusPage } from './syllabus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyllabusPageRoutingModule
  ],
  declarations: [SyllabusPage, ExpandableComponent]
})
export class SyllabusPageModule {}
