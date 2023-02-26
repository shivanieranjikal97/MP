import { Component } from '@angular/core';
import { FirebaseServiceService, User } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 
  ucid: string;
  name: string;
  contact: string;
  email: string;
  location: string;

  public users = [];

  user: User = {
    ucid: '',
   

    name: '',
    contact: '',
    email: '',
    location: '',
  };

  constructor(private firebaseService: FirebaseServiceService) {
  }

  ngOnInit() {

    this.firebaseService.getUsers().subscribe(data => {

      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          fullName: e.payload.doc.data()['fullName'],
          ucid: e.payload.doc.data()['ucid'],
          name: e.payload.doc.data()['name'],
          contact: e.payload.doc.data()['contact'],
          email: e.payload.doc.data()['email'],
          location: e.payload.doc.data()['location']
         
        };
      });

      console.log(this.users.length);

      this.initializeValues();
    });
  }

  initializeValues(): any{
    this.ucid = this.users[0].ucid;
    this.name = this.users[0].name;
    this.contact = this.users[0].contact;
    this.email = this.users[0].email;
    this.location = this.users[0].location;
    
  }

  updateData(ucid1,user): any{

    console.log(ucid1);
    console.log(user);

    this.user = {
      ucid: "10",
      name: "Eranjikal",
      contact: "123",
      email: "jhgkj",
      location: "Pune"

    };


  this.firebaseService.updateUser(ucid1, this.user);


  }
}
