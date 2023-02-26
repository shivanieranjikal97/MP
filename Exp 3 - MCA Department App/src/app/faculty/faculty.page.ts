import { Component, OnInit } from '@angular/core';
import { FACULTY } from '../mock-faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.page.html',
  styleUrls: ['./faculty.page.scss'],
})
export class FacultyPage implements OnInit {

  constructor() { }
  isModalOpenFac = false;

  setOpenFac(isOpen: boolean) {
    this.isModalOpenFac = isOpen;
   
  }

  ngOnInit() {
  }

  faculty = FACULTY;
  j:any;

  isModalOpen = false;

  setOpen(isOpen: boolean, i:number) {
    this.isModalOpen = isOpen;
    this.j=i;
  }

}
