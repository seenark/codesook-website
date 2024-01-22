import { Slot, component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

type Props = {
  class?: HTMLElement["className"];
};

export default component$<Props>(({ class: className }) => {
  return (
    <div class={twMerge("flex w-full justify-center", className)}>
      <div class="w-full max-w-[1200px]">
        <Slot></Slot>
      </div>
    </div>
  );
});
