import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  showMe: boolean = false
  prov: boolean = false
  about: boolean = false

  constructor() { }

  toggleTag() {
    this.showMe = !this.showMe
  }

  toggleProv() {
    this.prov = !this.prov
  }

  toggleAbout() {
    this.about = !this.about
  }


  j: string;
  myUrl: any;

  isModalOpent1 = false;

  setOpent1(isOpen: boolean) {
    this.isModalOpent1 = isOpen;

  }

}
