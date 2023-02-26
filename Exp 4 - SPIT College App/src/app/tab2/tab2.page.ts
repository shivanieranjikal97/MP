import { Component } from '@angular/core';
import { COURSE } from '../mock-course';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private toastController: ToastController) { }

  isModalOpent2 = false;

  setOpent2(isOpen: boolean) {
    this.isModalOpent2 = isOpen;

  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'You have already enrolled in this course !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  async presentToastSuccess(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Successfully enrolled in this course !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  course = COURSE;

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

  u: number = Number(localStorage.getItem('code'));
  // code : number = Number(this.codeString);

  list: any = [];
  arr: boolean[] = [true, true, true, true, true, true, true, true];

  add(i: any) {
    this.arr[this.course?.[this.u].courses?.[i].id] = false;

    let myCourse = {
      "id": this.course?.[this.u].courses?.[i].id,
      "name": this.course?.[this.u].courses?.[i].name,
      "code": this.course?.[this.u].courses?.[i].code,
      "icon": this.course?.[this.u].courses?.[i].icon
    }

    this.list.push(myCourse);

    console.log(myCourse)
    this.presentToastSuccess('bottom');
  }


  isModalOpenC = false;
  j: number;

  setOpenC(isOpen: boolean, i: number) {
    this.isModalOpenC = isOpen;
    this.j = i;
  }



}
