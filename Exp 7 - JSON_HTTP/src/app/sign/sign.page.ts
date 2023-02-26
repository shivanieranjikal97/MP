import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Account created Successfully. Login to your account !',
      duration: 2000,
      position: position
    });

    await toast.present();


  }


  logTab: boolean = true;
  signTab: boolean = false;

  toggleSign() {
    this.logTab = false
    this.signTab = true
  }

  toggleLog() {
    this.logTab = true
    this.signTab = false
  }

  ucid: any;


  local() {
    localStorage.setItem('ucid', this.ucid);
    console.log(localStorage.getItem('ucid'));
    if (this.ucid === 'ST01') {
      localStorage.setItem('code', '0');
    }
    else if (this.ucid === 'TP01') {
      localStorage.setItem('code', '1');
    }
    else {
      localStorage.setItem('code', '0');
    }

    console.log(localStorage.getItem('code'));
  }


}
