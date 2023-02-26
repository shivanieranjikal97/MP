export interface Faculty {


  deptId: number;
  deptName: string;
  syllabus: string;
  department: [{
    id: number, fname: string, post: string, image: string, profile: string, edu: string, contact: string, email: string,
    interest: [i1: string, i2: string, i3: string, i4: string]
  },
    {
      id: number, fname: string, post: string, image: string, profile: string, edu: string, contact: string, email: string,
      interest: [i1: string, i2: string, i3: string, i4: string]
    },
    {
      id: number, fname: string, post: string, image: string, profile: string, edu: string, contact: string, email: string,
      interest: [i1: string, i2: string, i3: string, i4: string]
    },
    {
      id: number, fname: string, post: string, image: string, profile: string, edu: string, contact: string, email: string,
      interest: [i1: string, i2: string, i3: string, i4: string]
    }
  ];
}

export interface Dates {
  deptCode: string;
  deptName: string;
  calDate: [{ id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },
    { id: number, day: string, date: string, month: string, name: string, time: string, name1: string, time1: string, name2: string, time2: string },

  ]

}

export interface Course {
  deptCode: string;
  deptName: string;
  courses: [{ id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string },
    { id: number, name: string, code: string, icon: string }]

}