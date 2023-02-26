import { Component } from '@angular/core';

import { OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  userForm: FormGroup;

  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService, private toastController: ToastController) {
      this.userForm = this.formBuilder.group({
        name: [''],
        category: [''],
        ctc: [''],
        role: [''],
        location: [''],
        date: ['']
      })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/tabs/tab2']);
          })
        });
    }

    this.presentToast("bottom");
  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Details submitted successfully !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }
}
