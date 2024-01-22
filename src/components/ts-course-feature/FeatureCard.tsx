import { Slot, component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

type Props = {
  class?: HTMLElement["className"];
};

export default component$<Props>(({ class: className }) => {
  return (
    <div
      class={twMerge(
        "flex flex-col items-center justify-center gap-[30px] rounded-xl bg-deepBlue p-[30px] text-center  md:flex-row",
        className,
      )}
    >
      <div class="flex flex-col gap-[10px]">
        <Slot name="head"></Slot>
        <Slot name="desc"></Slot>
      </div>
      <div>
        <Slot name="icon"></Slot>
      </div>
    </div>
  );
});
