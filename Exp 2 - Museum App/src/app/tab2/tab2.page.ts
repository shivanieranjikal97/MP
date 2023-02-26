import { Component } from '@angular/core';
import { Art } from '../Art';
import { ART } from '../mock-art';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  art = ART;

  showMe:boolean = false
  prov:boolean =false
  lit:boolean =false
  exhi:boolean =false
  constructor() {}

  toggleTag(){
    this.showMe=!this.showMe
  }

  toggleProv(){
    this.prov=!this.prov
  }

}
