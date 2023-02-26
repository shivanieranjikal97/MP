import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  isDisabled: boolean=false;

  constructor(private toastController: ToastController) { }
  isModalOpenFee = false;

  setOpenFee(isOpen: boolean) {
    this.isModalOpenFee = isOpen;
   
  }

  async presentToast(position: 'bottom') {
    this.isDisabled=true;
    
    const toast = await this.toastController.create({
      message: 'Thank you for your valuable feedback !',
      duration: 2000,
      position: position
    });

    await toast.present();
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  ngOnInit() {
  }

}
