import { Component } from '@angular/core';
import { QUIZ1 } from 'src/mock-q1';
import { QUIZ2 } from 'src/mock-q2';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  lTab: boolean = false;
  pTab: boolean = true;
  p1Tab: boolean = false;
  p2Tab: boolean = false;
  finish1: boolean = false;
  finish2: boolean = false;

  toggleL() {
    this.lTab = true;
    this.pTab = false
    this.p1Tab = false
    this.p2Tab = false
    this.finish1 = false
    this.finish2 = false
  }

  toggle() {
    this.pTab = true
    this.p1Tab = false
    this.p2Tab = false
    this.finish1 = false
    this.finish2 = false
    this.lTab = false;
  }

  toggleP1() {
    this.pTab = false
    this.p1Tab = true
    this.p2Tab = false
    this.lTab = false;
  }

  toggleP2() {
    this.pTab = false
    this.p1Tab = false
    this.p2Tab = true
    this.lTab = false;
  }

  quiz1 = QUIZ1;
  quiz2 = QUIZ2;

  curAlpha = 0;
  curNum = 0

  totalCor1 = 0;
  totalCor2 = 0;

  progress1 = 0;
  progress2 = 0;

  correct1: boolean[] = [false, false, false, false, false];
  wrong1: boolean[] = [false, false, false, false, false];
  correct2: boolean[] = [false, false, false, false, false];
  wrong2: boolean[] = [false, false, false, false, false];


  prev1() {
    if (this.curAlpha > 0) {
      this.curAlpha = this.curAlpha - 1;
    }
  }

  prev2() {
    if (this.curNum > 0) {
      this.curNum = this.curNum - 1;
    }
  }

  next1() {
    if (this.curAlpha < 4) {
      this.curAlpha = this.curAlpha + 1;
    }
  }

  next2() {
    if (this.curNum < 4) {
      this.curNum = this.curNum + 1;
    }
  }

  checkAns1(i: any) {
    if (i === this.quiz1?.[this.curAlpha].ans) {
      this.correct1[this.curAlpha] = true;
      this.getProgressPercent1();
      setTimeout(() => {
        this.curAlpha = this.curAlpha + 1;
        this.check1();
      }, 2000);
      console.log("Correct")


    }
    else {
      this.wrong1[this.curAlpha] = true;
      setTimeout(() => {
        this.curAlpha = this.curAlpha + 1;
        this.check1();
      }, 2000);
      console.log("Wrong")

    }


  }

  checkAns2(i: any) {
    if (i === this.quiz2?.[this.curNum].ans) {
      this.correct2[this.curNum] = true;
      this.getProgressPercent2();
      setTimeout(() => {
        this.curNum = this.curNum + 1;
        this.check2();
      }, 2000);
      console.log("Correct")


    }
    else {
      this.wrong2[this.curNum] = true;
      setTimeout(() => {
        this.curNum = this.curNum + 1;
        this.check2();
      }, 2000);
      console.log("Wrong")

    }


  }


  getProgressPercent1() {
    this.totalCor1 = this.totalCor1 + 1;
    this.progress1 = (((this.totalCor1) / 5));
    return this.progress1;
  }

  getProgressPercent2() {
    this.totalCor2 = this.totalCor2 + 1;
    this.progress2 = (((this.totalCor2) / 5));
    return this.progress2;
  }

  check1() {
    if (this.curAlpha === 5) {

      this.p1Tab = false;
      this.finish1 = true;
    }
  }

  check2() {
    if (this.curNum === 5) {

      this.p2Tab = false;
      this.finish2 = true;
    }
  }



}
