import { Component } from '@angular/core';
import { EXHI } from '../mock-exhi';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  input: string;

  exhi = EXHI;

  upTab:boolean =true;
  pTab:boolean =false;

  constructor(private toastController: ToastController) {}

  toggleUp(){
    this.upTab=true
    this.pTab=false
  }

  toggleP()
  {
    this.upTab=false
    this.pTab=true
  }

  async presentToast(position: 'bottom') {
    this.input="";
    const toast = await this.toastController.create({
      message: 'Thank you for sending enquiry. Our team will contact you shortly !',
      duration: 2000,
      position: position
    });

    await toast.present();
    
  }


}
