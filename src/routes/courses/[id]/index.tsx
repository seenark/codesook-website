import { component$ } from "@builder.io/qwik";
import Header from "./Header";
import CourseInfo from "./CourseInfo";
import { courses } from "~/mockup/courses";
import WhatYouWillLearn from "./WhatYouWillLearn";

type Props = {};
export default component$<Props>(() => {
  const firstCourse = courses[0];
  return (
    <div>
      <Header
        title="Typescript Fundamentals for Beginners"
        description="เจาะลึกพื้นฐานของ Typescript แนวคิดของตัวภาษาที่เป็น Static type การนำไปใช้งาน โค้ดที่มีความน่าเชื่อถือ เกิด error ได้น้อยกว่า"
      />
      <CourseInfo {...firstCourse} />
      <WhatYouWillLearn {...firstCourse} />
    </div>
  );
});
