import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }

  au: string[] = ["../assets/name.mp3", "../assets/animal.mp3", "../assets/color.mp3", "../assets/food.mp3", "../assets/cartoon.mp3"];

  playAudio(i: any) {
    let audio = new Audio();
    audio.src = this.au?.[i];
    audio.load();
    audio.play();
  }
}
