import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserCrudService } from './../services/user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Users: any = [];

  constructor(private userCrudService: UserCrudService,
    private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  removeUser(user) {

    this.userCrudService.deleteUser(user.id)
      .subscribe(() => {
        this.ionViewDidEnter();
        console.log('User deleted!')
      }
      )

  }



}
