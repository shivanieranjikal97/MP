import { Component, OnInit } from '@angular/core';
import { Art } from '../Art';
import { ART } from '../mock-art';

@Component({
  selector: 'app-bloomsbury',
  templateUrl: './bloomsbury.page.html',
  styleUrls: ['./bloomsbury.page.scss'],
})
export class BloomsburyPage implements OnInit {

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
