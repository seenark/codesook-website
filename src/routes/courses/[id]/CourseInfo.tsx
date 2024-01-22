import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import { type Course } from "~/domain/course";
import CourseCard from "./CourseCard";

type Props = Course;
export default component$<Props>((props) => {
  return (
    <div class="overflow-hidden">
      <Container class="bg-classroom7 bg-cover bg-center bg-no-repeat">
        <div class="relative z-10 flex flex-col items-center justify-center gap-[20px] p-[40px] pt-0 md:items-start">
          <div class="flex flex-row items-center justify-center gap-[10px] px-0 py-[40px]">
            <CourseCard {...props} showShadow={true} />
          </div>
        </div>
      </Container>
    </div>
  );
});
