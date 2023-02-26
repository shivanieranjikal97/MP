import { Component, OnInit } from '@angular/core';
import { NUMBER } from 'src/mock-number';

@Component({
  selector: 'app-number',
  templateUrl: './number.page.html',
  styleUrls: ['./number.page.scss'],
})
export class NumberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  number = NUMBER;

  playAudio(i: any) {
    let audio = new Audio();
    audio.src = this.number?.[i].audio;
    audio.load();
    audio.play();
  }

}
