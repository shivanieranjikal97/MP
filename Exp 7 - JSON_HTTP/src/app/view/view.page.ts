import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage {

  updateUserFg: FormGroup;
  id: any;
  constructor(private userCrudService: UserCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router, private toastController: ToastController) { this.id = this.activatedRoute.snapshot.paramMap.get('id'); }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      name: [''],
      category: [''],
      ctc: [''],
      role: [''],
      location: [''],
      date: ['']
    })
  }

  fetchUser(id) {
    this.userCrudService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name: data['name'],
        category: data['category'],
        ctc: data['ctc'],
        role: data['role'],
        location: data['location'],
        date: data['date']
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.userCrudService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigate(['/tabs/tab2']);
        })
    }

    this.presentToast("bottom");
  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Details updated successfully !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }
}
