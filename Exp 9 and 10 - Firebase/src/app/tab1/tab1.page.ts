/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { getDatabase, ref, set } from 'firebase/database';
import { FirebaseServiceService, User } from 'src/app/services/firebase-service.service';
import { Observable } from 'rxjs';
import { IonRadioGroup, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { timeStamp } from 'console';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fullName: string;
  ucid: string;
  branch: string;
  year: string;

  name: string;
  contact: string;
  email: string;
  location: string;

  userForm: FormGroup;

  user: User = {
    ucid: '',
   

    name: '',
    contact: '',
    email: '',
    location: '',
  };


  id: string;

  //private users: Observable<User[]>;
  private users = [];

  constructor(private firebaseService: FirebaseServiceService, private toastCtrl: ToastController,
              public fb: FormBuilder, private storage: Storage, private afAuth: AngularFireAuth) {
                this.init();
  }

  /*ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.firebaseService.getUser(id).subscribe(user => {
        this.user = user;
      });
    }
  }*/

  async init() {
    await this.storage.create();
    const name = await this.storage.get('uname');
    //console.log('uname is'+name);
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.userForm = this.fb.group({
      ucid: ['', [Validators.required]]
     
    });

    this.firebaseService.getUsers().subscribe(data => {

      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          ucid: e.payload.doc.data()['ucid'],
          name: e.payload.doc.data()['name'],
          contact: e.payload.doc.data()['contact'],
          email: e.payload.doc.data()['email'],
          location: e.payload.doc.data()['location']
        };
      });

      console.log(this.users);
    });
  }

  submitData(): any{
    /*const database = getDatabase();

    set(ref(database, 'users/' + this.ucid), {
      fullName: this.fullName,
      branch: this.branch,
      year : this.year
    });*/

    this.user = {
      ucid: this.ucid,
      name: this.name,
      contact: this.contact,
      email: this.email,
      location: this.location

    };

    this.firebaseService.addUser(this.user).then(() => {
      this.showToast('User details submitted successfully!!');
    }, err => {
      this.showToast('There was a problem adding your details!');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());

  
  }
/*
  initializeUnderstanding(event){
    this.understanding = event.detail.value;
  }

  initializeConcentration(event){
    this.concentration = event.detail.value;
  }

  initializeUnderstanding2(event){
    this.understanding2 = event.detail.value;
  }

  initializeConcentration2(event){
    this.concentration2 = event.detail.value;
  }

  addPCS(event){
    if (event.checked === true){
      this.pcs = true;
    }
  }

  addPA(event){
    if (event.checked === true){
      this.pa = true;
    }
  }

  addMPL(event){
    if (event.checked === true){
      this.mpl = true;
    }
  }
  */


 
}
