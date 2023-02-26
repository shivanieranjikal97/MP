import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-gallerys',
  templateUrl: './gallerys.page.html',
  styleUrls: ['./gallerys.page.scss'],
})
export class GallerysPage implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  
  constructor(private iab: InAppBrowser) { }

  isModalOpenGal = false;

  setOpenGal(isOpen: boolean) {
    this.isModalOpenGal = isOpen;
   
  }

  ngOnInit() {

     }
  }

