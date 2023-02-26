import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  input: string;

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'bottom') {
    this.input="";
    const toast = await this.toastController.create({
      message: 'Thank you for your valuable feedback !',
      duration: 2000,
      position: position
    });

    await toast.present();
    
  }

  ngOnInit() {
  }

}
