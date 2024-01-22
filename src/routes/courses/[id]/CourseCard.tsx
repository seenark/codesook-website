import { component$ } from "@builder.io/qwik";
import Ts from "~/media/icons/typescript.svg?jsx";
import Calendar from "@phosphor-icons/core/assets/regular/calendar.svg?jsx";
import Map from "@phosphor-icons/core/assets/regular/map-pin.svg?jsx";
import Chair from "@phosphor-icons/core/assets/regular/chair.svg?jsx";
import Phone from "@phosphor-icons/core/assets/regular/phone-call.svg?jsx";
import { Match, Option } from "effect";
import { type Course } from "~/domain/course";
import { twMerge } from "tailwind-merge";

type Props = Course & {
  showShadow: boolean;
};
export default component$<Props>(
  ({ courseDates, courseDatesNote, available, price, showShadow }) => {
    return (
      <div
        class={twMerge(
          "flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-[20px] rounded-2xl bg-white/50 p-4 text-ct-surface0 backdrop-blur-xl",
          Match.value(showShadow).pipe(
            Match.when(
              true,
              () =>
                "shadow-[0.47px_0.39px_0.37px_-0.31px_rgba(0,0,0,0.07),1.44px_1.20px_1.13px_-0.625px_rgba(0,0,0,0.07),3.83px_3.19px_2.99px_-0.93px_rgba(0,0,0,0.10),12px_10px_9.37px_-1.25px_rgba(0,0,0,0.18)]",
            ),
            Match.orElse(() => ""),
          ),
        )}
      >
        <Ts class="text-ct-surface0" />
        <div class="flex w-full flex-row items-center justify-center gap-[20px] px-4 py-2">
          <Calendar class="h-[43px] w-[40px] fill-ct-surface2" />
          <div class="flex flex-col font-bold">
            <p>{courseDates}</p>
            {Option.match(Option.fromNullable(courseDatesNote), {
              onNone: () => "",
              onSome: (a) => <p>{a}</p>,
            })}
          </div>
        </div>
        <div class="flex w-full flex-row items-center justify-start gap-[20px] px-4 py-2 font-semibold">
          <Map class="h-[43px] w-[40px] fill-ct-surface1" />
          <a href="#" target="_blank">
            offline @CodeSook office
          </a>
        </div>
        <div class="flex w-full flex-row items-center justify-start gap-[20px] px-4 py-2 font-semibold">
          <Chair class="h-[43px] w-[40px] fill-ct-surface1" />
          <h5 class="text-[26px] font-bold">ยังว่างอีก: {available}</h5>
        </div>
        <div class="flex w-full flex-row items-center justify-center gap-[20px] px-4 py-2 font-semibold">
          <h5 class="text-[26px] font-bold">฿ {price.toLocaleString()}</h5>
        </div>
        <a
          href="tel:0822528586"
          class="flex w-full flex-row items-center justify-center gap-[20px] rounded-2xl bg-[#F5A980] px-4 py-2 text-[25px] font-bold text-white"
        >
          Book now
          <Phone width={35} height={35} class="fill-white" />
        </a>
      </div>
    );
  },
);
