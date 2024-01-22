import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import Turtle1 from "~/media/turtle1.jpeg";

export default component$(() => {
  return (
    <Container class="bg-ct-base">
      <div class="flex flex-col gap-[60px] px-[20px] py-[60px] md:py-[100px] lg:px-[40px]">
        <h1 class="text-[70px] font-bold text-white">Online Courses</h1>
        <div class="flex flex-col flex-wrap items-center justify-center gap-[20px]">
          <h1 class="text-[40px] font-bold text-white md:text-[50px] lg:text-[60px]">
            Coming soon
          </h1>
          <img
            src={Turtle1}
            width={640}
            height={640}
            class="rounded-full md:h-[480px] md:w-[480px]"
          />
        </div>
      </div>
    </Container>
  );
});
