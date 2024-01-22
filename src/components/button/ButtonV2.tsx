import { Slot, component$ } from "@builder.io/qwik";
import { type JSX } from "@builder.io/qwik/jsx-runtime";
import { twMerge } from "tailwind-merge";
import { Match } from "effect";

type Props = {
  class?: HTMLButtonElement["className"];
  Icon?: JSX.Element;
};
export default component$<Props>(({ class: className, Icon }) => {
  return (
    <button
      class={twMerge(
        "group flex items-center justify-center gap-[10px] rounded-full bg-ct-surface0 px-4 py-2 text-sm text-white",
        className,
      )}
    >
      <Slot></Slot>
      {Match.value(Icon).pipe(
        Match.when(Match.defined, () => (
          <div class="animate-bounce opacity-50 transition duration-75 group-hover:animate-none group-hover:opacity-100">
            {Icon}
          </div>
        )),
        Match.orElse(() => ""),
      )}
    </button>
  );
});
