import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import CourseCard from "./CourseCard";
import Check from "@phosphor-icons/core/assets/regular/check-circle.svg?jsx";
import { type Course } from "~/domain/course";

type Props = Course;
export default component$<Props>((props) => {
  return (
    <Container class="">
      <div class="flex flex-col-reverse items-center justify-center gap-[30px] px-[40px] py-[40px] md:px-[30px] lg:flex-row">
        <CourseCard {...props} showShadow={false} />
        <div class=" rounded-2xl border">
          <div class="flex h-full flex-col items-start justify-start gap-5 p-5">
            <h1 class="text-[50px] font-bold text-ct-base">
              What you'll learn
            </h1>
            <p class="text-[24px] text-ct-surface1">
              {props.whatYouWillLearn.description}
            </p>
            <p class="text-[24px] text-deepBlue">
              เมื่อจบหลักสูตรนี้ผู้เรียนจะได้รับ:
            </p>
            {props.whatYouWillLearn.yourProfit.map((profit, i) => (
              <div
                key={i}
                class="grid grid-cols-[41px_1fr] items-center gap-[15px]"
              >
                <Check class="h-[41px] w-[41px] fill-ct-green" />
                <p>{profit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
});
