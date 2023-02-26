import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  isModalOpenCon = false;

  setOpenCon(isOpen: boolean) {
    this.isModalOpenCon = isOpen;
   
  }

  ngOnInit() {
  }

  isModalOpenF = false;

  setOpenF(isOpen: boolean) {
    this.isModalOpenF = isOpen;
   
  }

  isModalOpenL = false;

  setOpenL(isOpen: boolean) {
    this.isModalOpenL = isOpen;
   
  }

  isModalOpenT = false;

  setOpenT(isOpen: boolean) {
    this.isModalOpenT = isOpen;
   
  }


}
