import { Component, OnInit } from '@angular/core';
import { Art } from '../Art';
import { ART } from '../mock-art';

@Component({
  selector: 'app-oldmaster',
  templateUrl: './oldmaster.page.html',
  styleUrls: ['./oldmaster.page.scss'],
})
export class OldmasterPage implements OnInit {

  art = ART;

  showMe:boolean = false
  prov:boolean =false
  lit:boolean =false
  exhi:boolean =false

  constructor() { }

  ngOnInit() {
  }

  toggleTag(){
    this.showMe=!this.showMe
  }

  toggleProv(){
    this.prov=!this.prov
  }


}
