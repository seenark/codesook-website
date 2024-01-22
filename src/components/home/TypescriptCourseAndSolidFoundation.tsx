import { component$ } from "@builder.io/qwik";
import TypescriptCouse from "./TypescriptCouse";
import SolidFoundation from "./SolidFoundation";

export default component$(() => {
  return (
    <div class="flex flex-col flex-nowrap items-center justify-center gap-5 px-[20px] py-[60px] md:px-[40px]">
      <div class="flex w-full max-w-[1000px] flex-col md:gap-[100px]">
        <TypescriptCouse />
        <SolidFoundation />
      </div>
    </div>
  );
});
