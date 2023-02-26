export interface Alphabet {
  id: number;
  cap: string;
  small: string;
  image: string;
  audio: string;
  bg: string;

}

export interface Number {
  id: number;
  num: string;
  word: string;
  image: string;
  audio: string;
  bg: string;

}

export interface Quiz1 {
  id: number;
  qs: string;
  option: [op1: string, op2: string, op3: string, op: string];
  ans: string;
}

export interface Quiz2 {
  id: number;
  qs: string;
  option: [op1: string, op2: string, op3: string, op: string];
  ans: string;
}