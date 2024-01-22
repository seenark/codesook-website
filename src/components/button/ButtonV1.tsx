import { Slot, component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

type Props = HTMLButtonElement;
export default component$<Props>(({ className }) => {
  return (
    <button class={twMerge("rounded-full text-sm text-white", className)}>
      <Slot></Slot>
    </button>
  );
});
