import { component$ } from "@builder.io/qwik";
import Container from "../general/Container";
import TypescriptLogo from "~/media/icons/typescript.svg?jsx";

export default component$(() => {
  return (
    <Container class="bg-ct-base">
      <div class="flex flex-col items-center gap-[60px] px-20 py-20">
        <div class="flex flex-col gap-[30px]">
          <h2 class="text-center text-[50px] font-bold text-ct-text">
            Why Typescript
          </h2>
          <div class="flex justify-center text-ct-text">
            <TypescriptLogo />
          </div>
        </div>
        <div class="flex max-w-[500px] flex-col gap-[40px] text-xl text-ct-subtext0">
          <p>
            ในปัจจุบันการพัฒนาเวปไซต์ถือเป็นพื้นฐาน
            และสามารถนำไปต่อยอดในเส้นทางโปรแกรมเมอร์อื่นๆได้อีกมากซึ่งหากเราพัฒนาเวปไซต์ก็เลี่ยงไม่ได้ที่จะต้องเรียนรู้
            Javascript แต่การใช้ Typescript แทน Javascript นั้นมันทำให้ code
            เรามีคุณภาพ,
            มีความน่าเชื่อถือมากกว่าและยังลดความผิดพลาดของโปรแกรมได้มากกว่าการเรียนรู้
          </p>
          <p>
            Typescript มีความง่าย มากกว่าภาษาอื่นๆ พอสมควร
            เมื่อเรามีพื้นฐานที่ดีแล้วสักหนึ่งภาษา
            เมื่อเราต้องการต่อยอกไปเรียนรู้ภาษาอื่นๆ เพื่องานอื่นๆ
            มันจะกลายเป็นเรื่องง่ายมากๆเลยละ
          </p>
        </div>
      </div>
    </Container>
  );
});
