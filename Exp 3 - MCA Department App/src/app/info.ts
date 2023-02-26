export interface Faculty {
    id: number;
    name: string;
    post: string;
    image: string;
    profile: string;
    edu: string;
    contact: string;
    email: string;
    interest: [i1: string, i2: string, i3:string, i4:string ];
  }

  export interface Dates {
    id: number;
    day: string;
    date: string;
    month: string;
    name: string;
    time: string;
    name1: string;
    time1: string;
    name2: string;
    time2: string;
  }

  export interface Course{
    id: number;
    name: string;
    code: string;
    icon: string;
  }