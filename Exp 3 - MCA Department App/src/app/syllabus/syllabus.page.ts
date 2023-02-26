import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {

  constructor() { }

  isModalOpenSy = false;

  setOpenSy(isOpen: boolean) {
    this.isModalOpenSy = isOpen;
   
  }

  ngOnInit() {
  }

}
