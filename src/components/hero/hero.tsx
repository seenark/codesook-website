import { component$ } from "@builder.io/qwik";
import ButtonV2 from "../button/ButtonV2";

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center gap-5 p-5 pt-[60px] text-center md:px-0 md:py-[60px]">
      <h1 class="text-[32px] font-bold text-ct-crust md:text-[40px] lg:text-[50px]">
        ยินดีต้อนรับสู่แหล่งการเรียนรู้ <br />
        ที่จะสร้างให้คุณกลายเป็นโปรแกรมเมอร์
      </h1>
      <h3 class="text-[24px] font-bold text-ct-subtext0">
        เรียนการเขียนโปรแกรมด้วย Typescript <br></br>{" "}
        เปิดประตูสู่การเป็นโปรแกรมเมอร์ <br></br>
        วางรากฐานที่มั่นคงสำหรับเส้นทางการเป็นโปรแกรมเมอร์ในอนาคต
      </h3>
      <ButtonV2>Take course</ButtonV2>
    </div>
  );
});
