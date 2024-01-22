import { component$ } from "@builder.io/qwik";
import Classroom3 from "~/media/classroom3.jpeg?jsx";
import Container from "../general/Container";

export default component$(() => {
  return (
    <Container>
      <div class="flex grid-cols-2 flex-col-reverse gap-[10px] bg-white text-deepBlue md:grid">
        <div class="flex h-full min-w-[400px] flex-col justify-center gap-5 p-5">
          <h2 class="text-center text-[40px] font-bold text-deepBlue ">
            Offline course 🏫
          </h2>
          <p class="text-[24px] font-medium text-ct-surface2 ">
            เราคิดว่าการเรียนแบบ offline นั้นสนุกกว่า
            การตอบโต้ระหว่างผู้เรียนกับผู้สอน หรือระหว่างนักเรียนด้วยกัน
            มันทำให้การเรียนสนุกขึ้น
            หากนักเรียนมีคำถามหรือข้อสงสัยก็จะได้รับคำตอบ คำอธิบาย ได้ในทันที
          </p>
          <div class="flex flex-row gap-[15px]">
            <button class="rounded-full bg-deepBlue px-5 py-2 text-white">
              Get Started
            </button>
            <button class="rounded-full bg-gray-300 px-5 py-2 text-deepBlue">
              Learn more
            </button>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="w-[400px] bg-red-300 lg:w-[600px]">
            <Classroom3 />
          </div>
        </div>
      </div>
    </Container>
  );
});
