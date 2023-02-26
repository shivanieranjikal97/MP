import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { COMPANY } from '../mock-company';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private toastController: ToastController) { }

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
      message: 'Successfully registered for this placement drive !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  company = COMPANY;

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

  list: any = [];
  arr: boolean[] = [true, true, true, true];

  add(i: any) {
    this.arr[this.company?.[i].id] = false;

    let myCompany = {
      "id": this.company?.[i].id,
      "name": this.company?.[i].name,
      "category": this.company?.[i].category,
      "role": this.company?.[i].role,
      "process": this.company?.[i].process,
      "date": this.company?.[i].date,
      "image": this.company?.[i].image
    }

    this.list.push(myCompany);

    console.log(myCompany)
    this.presentToastSuccess('bottom');
  }

  isModalOpenC = false;
  j: number;

  setOpenC(isOpen: boolean, i: number) {
    this.isModalOpenC = isOpen;
    this.j = i;
  }



}
