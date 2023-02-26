import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-design',
  templateUrl: './design.page.html',
  styleUrls: ['./design.page.scss'],
})
export class DesignPage implements OnInit {

  constructor(private dom: DomSanitizer) { }
  isModalOpenEv = false;

  setOpenEv(isOpen: boolean) {
    this.isModalOpenEv = isOpen;
   
  }

  ngOnInit() {
  }



  j:string;
  myUrl: any;

  isModalOpenE = false;

  setOpenE(isOpen: boolean, i:string) {
    this.isModalOpenE = isOpen;
    this.j=i;
    this.myUrl = this.dom.bypassSecurityTrustResourceUrl(this.j);
    console.log(this.j);
    console.log(this.myUrl);
  }



}
