import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import Card from "./Card";
import { type Course } from "~/domain/course";

type Props = {
  courses: Course[];
};
export default component$<Props>(({ courses }) => {
  return (
    <Container class="bg-gradient-to-b from-white via-white to-ct-base">
      <div class="flex flex-col gap-[60px] px-[20px] py-[60px] md:py-[100px] lg:px-[40px]">
        <h1 class="text-[70px] font-bold text-ct-base">Offline Courses</h1>
        <div class="flex flex-wrap items-start justify-center gap-[20px]">
          {courses.map((course, i) => (
            <Card key={i} {...course} />
          ))}
        </div>
      </div>
    </Container>
  );
});
