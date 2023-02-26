import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(private iab: InAppBrowser, private dom: DomSanitizer) { }
  isModalOpenEv = false;

  setOpenEv(isOpen: boolean) {
    this.isModalOpenEv = isOpen;
   
  }

  ngOnInit() {
  }

  openSocial(){
    const browser=this.iab.create('http://mca.spit.ac.in/social.php','_self','locations=yes');
  
    browser.show(); browser.close();
   
}

openCultural(){
  const browser=this.iab.create('http://mca.spit.ac.in/cultural.php','_self','locations=yes');

  browser.show(); browser.close();
 
}

openSports(){
  const browser=this.iab.create('http://mca.spit.ac.in/sports.php','_self','locations=yes');

  browser.show(); browser.close();
 
}

openAlumni(){
  const browser=this.iab.create('http://mca.spit.ac.in/alumni.php','_self','locations=yes');

  browser.show(); browser.close();
 
}


  j:string;
  myUrl: any;

  isModalOpenE = false;

  setOpenE(isOpen: boolean, i:string) {
    this.isModalOpenE = isOpen;
    this.j=i;
    this.myUrl = this.dom.bypassSecurityTrustResourceUrl(this.j);
    console.log(this.j);
    console.log(this.myUrl);
  }

}
