import { component$ } from "@builder.io/qwik";
import Header from "./Header";
import OfflineCourse from "./OfflineCourses/OfflineCourse";
import OnlineCourses from "./OfflineCourses/OnlineCourses";
import { courses } from "../../mockup/courses";

export default component$(() => {
  return (
    <>
      <Header />
      <OfflineCourse courses={courses} />
      <OnlineCourses />
    </>
  );
});
