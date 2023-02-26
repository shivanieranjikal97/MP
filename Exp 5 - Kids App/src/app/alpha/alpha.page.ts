import { Component, OnInit } from '@angular/core';
import { ALPHABET } from 'src/mock-alpha';


@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.page.html',
  styleUrls: ['./alpha.page.scss'],
})
export class AlphaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alphabet = ALPHABET;

  playAudio(i: any) {
    let audio = new Audio();
    audio.src = this.alphabet?.[i].audio;
    audio.load();
    audio.play();
  }
}
