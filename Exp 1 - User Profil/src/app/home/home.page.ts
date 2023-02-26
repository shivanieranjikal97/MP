import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  actionSheetController: any;

  constructor(private actionSheet: ActionSheetController) {
   
  }
  ngOnInit(): void {
  
  }


  async _actionSheet(){
    const actionSheetConst = await this.actionSheet.create({
      header: 'Action Sheet',
      buttons:[
        {
          text: 'View Profile',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked')
          }
        },
         {
          text: 'Share',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })

    actionSheetConst.present();
    console.log("Action Sheet")
  }


}
