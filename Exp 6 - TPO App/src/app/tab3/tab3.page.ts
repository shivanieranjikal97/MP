import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dom: DomSanitizer) { }

  c1: boolean = true;
  c2: boolean = false;
  c3: boolean = false;
  c4: boolean = false;
  c5: boolean = false;
  c6: boolean = false;

  togglePersonal() {
    this.c1 = true;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    this.c5 = false;
    this.c6 = false;
  }

  toggleHSC() {
    this.c1 = false
    this.c2 = true;
    this.c3 = false;
    this.c4 = false;
    this.c5 = false;
    this.c6 = false;
  }

  toggleSSC() {
    this.c1 = false
    this.c2 = false;
    this.c3 = true;
    this.c4 = false;
    this.c5 = false;
    this.c6 = false;
  }

  toggleDegree() {
    this.c1 = false
    this.c2 = false;
    this.c3 = false;
    this.c4 = true;
    this.c5 = false;
    this.c6 = false;
  }

  toggleDoc() {
    this.c1 = false
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    this.c5 = true;
    this.c6 = false;
  }

  list: any = [];

  name!: string;
  email!: string;
  contact!: string;
  roll!: string;
  hscName!: string;
  hscYear!: string;
  hmarks!: number;
  htotal!: number;
  sscName!: string;
  sscYear!: string;
  smarks!: number;
  stotal!: number;
  degName!: string;
  s1!: number;
  s2!: number;
  s3!: number;
  s4!: number;
  s5!: number;




  toggleSubmit(name: any, email: any, contact: any, roll: any, hscName: any, hscYear: any, sscName: any, sscYear: any, degName: any) {
    this.c1 = false
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    this.c5 = false;
    this.c6 = true;

    let details = {
      "name": name,
      "email": email,
      "contact": contact,
      "roll": roll,
      "hscName": hscName,
      "hscYear": hscYear,
      "sscName": sscName,
      "sscYear": sscYear,
      "degName": degName,
    }

    this.list.push(details);
  }

  isModalOpenSy = false;
  url: any;
  docString: string;


  setOpenSy(isOpen: boolean) {
    this.isModalOpenSy = isOpen;
    const input = document.getElementById('doc') as HTMLInputElement
    this.docString = input.files[0].name;
    this.url = this.dom.bypassSecurityTrustResourceUrl(this.docString);
    console.log(this.url);
    console.log(this.docString);
  }



}
