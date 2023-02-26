import { Component } from '@angular/core';
import { DATES } from '../mock-dates';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dates = DATES;
  j: any = 0;
  showMe: boolean = true
  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Document uploaded successfully !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  async presentToastDone(position: 'bottom') {


    const toast = await this.toastController.create({
      message: 'Document submitted already !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  isModalOpent3 = false;

  setOpent3(isOpen: boolean) {
    this.isModalOpent3 = isOpen;

  }

  display(id: any) {
    console.log(id);
    this.j = id;
  }

  isModalOpenU = false;
  p: string;
  q: number;
  arr1: boolean[] = [true, true, true];
  u: number = Number(localStorage.getItem('code'));

  setOpenU(isOpen: boolean, q: number, i: string) {
    this.isModalOpenU = isOpen;
    this.p = i;
    this.q = q;
  }

  mark() {

    if (this.p === this.dates?.[this.u].calDate?.[this.q].name)
      this.arr1[0] = false;

    else if (this.p === this.dates?.[this.u].calDate?.[this.q].name1)
      this.arr1[1] = false;

    else if (this.p === this.dates?.[this.u].calDate?.[this.q].name2)
      this.arr1[2] = false;
  }

}
