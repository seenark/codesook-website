import { component$ } from "@builder.io/qwik";
import Books from "~/media/stack-of-books.png?jsx";

export default component$(() => {
  return (
    <div class="flex w-full flex-col-reverse items-center justify-center gap-[60px] pt-20 md:flex-row md:gap-[80px] md:pt-0">
      <div class="flex flex-col gap-5">
        <h2 class="text-[50px] font-bold text-deepBlue">Solid foundation</h2>
        <p class="text-[24px] text-ct-surface2">
          การมีความรู้พื้นฐานที่แข็งแรงมั่นคง
          จะทำให้เราสามารถเอาความรู้ไปต่อยอดในโลกของการเขียนโปรแกรมได้อีกมากมาย
          ไม่ได้เจาะจงเฉพาะการทำเวปไซต์เท่านั้น
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
      <div class="flex flex-col items-center justify-center">
        <div class="w-[292px]">
          <Books />
        </div>
      </div>
    </div>
  );
});
