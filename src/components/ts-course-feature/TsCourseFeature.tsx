import { component$ } from "@builder.io/qwik";
import FeatureCard from "./FeatureCard";
import TypescriptLogo from "~/media/icons/typescript.svg?jsx";
import AlgorithmIcon from "~/media/icons/algorithm-icon.svg?jsx";
import Container from "../general/Container";

export default component$(() => {
  return (
    <Container class="bg-ct-crust">
      <div class="flex flex-col px-[20px] py-[100px] text-ct-text">
        <div class="grid grid-flow-row grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard class="md:col-span-2">
            <h2 q:slot="head" class="text-[24px] font-bold text-lightBlue">
              📚 Master TypeScript Fundamentals
            </h2>
            <p q:slot="desc" class="text-[20px] text-ct-text">
              เจาะลึกแนวคิดพื้นฐานของ Typescript ตั้งแต่ตัวแปร,
              ประเภทของข้อมูลไปจนถึงฟังก์ชันและคลาส
            </p>
            <TypescriptLogo
              q:slot="icon"
              class="h-[180px] w-[180px] text-lightBlue"
            />
          </FeatureCard>
          <FeatureCard>
            <h2 q:slot="head" class="text-[24px] font-bold text-lightBlue">
              🚀 Hands-On Coding Practice
            </h2>
            <p q:slot="desc" class="text-[20px] text-ct-text">
              ฝึกฝนผ่านแบบฝึกหัด ใช้สิ่งที่เรียนรู้มาเพื่อหาคำตอบ
              เราพร้อมให้คำแนะนำหากนักเรียนเกิดคำถามต่างๆในแบบฝึกหัด
            </p>
          </FeatureCard>
          <FeatureCard>
            <h2 q:slot="head" class="text-[24px] font-bold text-lightBlue">
              🌐 Create Your Own Website
            </h2>
            <p q:slot="desc" class="text-[20px] text-ct-text">
              นำความรู้มาประยุกต์สร้างเวปไซต์ของตัวเอง
              เสริมด้วยคอนเซ็ปต์ต่างๆที่เกี่ยวข้องกับการทำเวปไซต์นอกเหนือจาก
              Fundamentals
            </p>
          </FeatureCard>
          <FeatureCard class="md:col-span-2">
            <h2 q:slot="head" class="text-[24px] font-bold text-lightBlue">
              🧩 Algorithmic Thinking
            </h2>
            <p q:slot="desc" class="text-[20px] text-ct-text">
              พัฒนาทักษะการแก้ปัญหาด้วย algorithm และโครงสร้างข้อมูลรูปแบบต่างๆ
              เรียนรู้ที่จะแก้ปัญหาในงานจริงๆได้อย่างมีประสิทธิภาพและมีเหตุผล
            </p>
            <AlgorithmIcon q:slot="icon" />
          </FeatureCard>
        </div>
      </div>
    </Container>
  );
});
