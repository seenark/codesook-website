import { component$ } from "@builder.io/qwik";
import Classroom from "~/media/classroom5.jpeg?jsx";

export default component$(() => {
  return (
    <div class="flex w-full flex-col items-center justify-center gap-[60px] md:flex-row md:gap-[80px]">
      <div class="flex flex-col items-center justify-center">
        <div class="h-[292px] w-[292px] lg:h-[400px] lg:w-[400px]">
          <Classroom />
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <h2 class="text-[50px] font-bold text-deepBlue">Typescript Course</h2>
        <p class="text-[24px] text-ct-surface2">
          เราสร้างหลักสูตรที่ครอบคลุมเนื้อหาของ Typescript
          สำหรับผู้เริ่มต้นโดยเฉพาะ
        </p>
        <div class="flex flex-row gap-[15px]">
          <button class="rounded-full bg-deepBlue px-5 py-2 text-white">
            See courses
          </button>
          <button class="rounded-full bg-gray-300 px-5 py-2 text-deepBlue">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
});
