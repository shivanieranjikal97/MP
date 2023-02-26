import { Component, OnInit } from '@angular/core';
import { FACULTY } from '../mock-faculty';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }

  faculty = FACULTY;
  
  isModalOpent2 = false;

  setOpent2(isOpen: boolean) {
    this.isModalOpent2 = isOpen;

  }

  isModalOpen = false;

  z: any;
  myUrl: any;

  setOpen(isOpen: boolean,i:number) {
    this.isModalOpen = isOpen;
    this.z = i;
    this.myUrl = this.dom.bypassSecurityTrustResourceUrl(this.faculty?.[i].syllabus);
  }
  cTab: boolean = true;
  dTab: boolean = false;

  toggleC() {
    this.cTab = true
    this.dTab = false
  }

  toggleD() {
    this.cTab = false
    this.dTab = true
  }

}
