import { Component } from '@angular/core';
import { Art } from '../Art';
import { ART } from '../mock-art';
import { ActionSheetController } from '@ionic/angular/';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  art = ART;
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

  }
}

