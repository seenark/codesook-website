import { component$ } from "@builder.io/qwik";
import Container from "../general/Container";
import TsWhite from "~/media/icons/white/typescript.svg";
import Html from "~/media/icons/white/html.svg";
import Css from "~/media/icons/white/css.svg";
import Tsx from "~/media/icons/white/typescript_react.svg";
import NodeJs from "~/media/icons/white/package_json.svg";
import Astro from "~/media/icons/white/astro.svg";
import Svelte from "~/media/icons/white/svelte.svg";
import Vite from "~/media/icons/white/vite.svg";
import Tailwind from "~/media/icons/white/tailwind.svg";
import VSCode from "~/media/icons/white/vs_code.svg";

type LogoProps = {
  src: string;
};
const Logo = component$<LogoProps>(({ src }) => {
  return (
    <div class="flex h-[130px] w-[130px] items-center justify-center gap-[10px] rounded-[20px] bg-ct-surface0  p-[10px] text-white">
      <img src={src} height={130} width={130} />
    </div>
  );
});

export default component$(() => {
  return (
    <Container class="bg-ct-base">
      <div class="flex flex-col gap-[60px] px-5 py-[60px]">
        <h2 class="text-center text-[32px] font-bold">
          Programming Languages and Frameworkscoming more soon
        </h2>
        <div class="flex flex-row flex-wrap items-center justify-center gap-[80px]">
          <Logo src={TsWhite} />
          <Logo src={Html} />
          <Logo src={Css} />
          <Logo src={Tsx} />
          <Logo src={NodeJs} />
          <Logo src={Astro} />
          <Logo src={Svelte} />
          <Logo src={Vite} />
          <Logo src={Tailwind} />
          <Logo src={VSCode} />
        </div>
      </div>
    </Container>
  );
});
