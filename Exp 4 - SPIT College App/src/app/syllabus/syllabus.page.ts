import { Component, OnInit } from '@angular/core';
import { FACULTY } from '../mock-faculty';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {

  constructor(private dom: DomSanitizer) { }

  faculty = FACULTY;

  isModalOpenSy = false;

  setOpenSy(isOpen: boolean) {
    this.isModalOpenSy = isOpen;
   
  }

  isModalOpenFac = false;

  setOpenFac(isOpen: boolean) {
    this.isModalOpenFac = isOpen;
   
  }

  isModalOpen = false;

  z: any;
  myUrl: any;

  setOpen(isOpen: boolean,i:number) {
    this.isModalOpen = isOpen;
    this.z = i;
    this.myUrl = this.dom.bypassSecurityTrustResourceUrl(this.faculty?.[i].syllabus);
  }

  ngOnInit() {
  }

  
}
