import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";

export default component$(() => {
  return (
    <Container class="">
      <div class="flex w-full flex-row justify-start gap-[60px] px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:py-[100px]">
        <div class="gap-[10px] p-[20px]">
          <h1 class="text-left text-[60px] font-bold text-ct-base md:text-[80px]">
            Our Courses
          </h1>
          <p class="text-left text-[23px] font-bold text-ct-surface2 md:text-[29px] lg:text-[36px]">
            <span>ตอนนี้เราเน้นสอนแบบ offline</span>
            <br></br>
            <span>การเรียนการสอนในตอนนี้เราก็จะมาเรียนกันที่บ้านของครู</span>
          </p>
        </div>
      </div>
    </Container>
  );
});
