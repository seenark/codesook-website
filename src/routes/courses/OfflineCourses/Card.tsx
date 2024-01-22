import { component$ } from "@builder.io/qwik";
import Calendar from "@phosphor-icons/core/assets/regular/calendar.svg?jsx";
import Chair from "@phosphor-icons/core/assets/regular/chair.svg?jsx";
import { Link } from "@builder.io/qwik-city";
import { type Course } from "~/domain/course";

type Props = {} & Course;
export default component$<Props>(
  ({ icon, available, price, studyRange, studyTime, title, totalTime }) => {
    return (
      <div class="flex w-full min-w-[100px] max-w-[370px] flex-col items-center justify-between self-stretch rounded-3xl bg-ct-surface0">
        <div class="flex flex-col items-center">
          <div class="gap-[10px] p-[34px]">
            <img src={icon} width={220} height={220} />
          </div>
          <div class="flex flex-col gap-[20px] p-[30px] pt-0 text-center">
            <h4 class="text-[24px] font-bold text-white">{title}</h4>
          </div>
        </div>
        <div class="flex flex-col gap-[20px] p-[30px] text-center">
          <div class="flex w-full flex-row items-center gap-[10px] text-left">
            <Calendar width={30} height={33} class="text-white" />
            <div class="gap-[10px] text-[16px] text-white/80">
              <p>{studyTime}</p>
              <p>{studyRange}</p>
              <p>รวม {totalTime} ชม.</p>
            </div>
          </div>
          <div class="flex w-full flex-row items-center gap-[10px] text-left">
            <Chair width={30} height={33} class="text-white" />
            <div class="gap-[10px] text-[16px] text-white/80">
              <p>ยังว่างอีก: {available}</p>
            </div>
          </div>
          <h5 class="text-left text-[24px] font-bold text-white">
            ฿ {price.toLocaleString()}
          </h5>
          <Link href="#">
            <button class="w-full rounded-xl bg-white p-[15px] text-[14px] font-semibold text-ct-base">
              ดูรายละเอียดเพิ่มเติม
            </button>
          </Link>
        </div>
      </div>
    );
  },
);
