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
  j: any;
  m: any;
  isModalOpen = false;

  setOpen(isOpen: boolean, k: number, i: number) {
    this.isModalOpen = isOpen;
    this.j = i;
    this.m = k;
  }

  deptTab: boolean = true;
  facTab: boolean = false;
  k: any;

  toggleFac(i: any) {
    this.k = i;
    this.deptTab = false
    this.facTab = true
  }

  toggleDept() {
    this.deptTab = true
    this.facTab = false
  }


}
