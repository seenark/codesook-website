export type WhatYouWillLearn = {
  description: string;
  yourProfit: string[];
};

export type Course = {
  readonly _tag: "Course";
  icon: string;
  title: string;
  studyTime: string;
  studyRange: string;
  totalTime: number;
  available: number;
  price: number;
  courseDates: string;
  courseDatesNote?: string;
  whatYouWillLearn: WhatYouWillLearn;
};
