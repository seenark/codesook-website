import { component$ } from "@builder.io/qwik";
import ButtonV2 from "../button/ButtonV2";
import ArrowBendLeftDown from "@phosphor-icons/core/assets/regular/arrow-bend-left-down.svg?jsx";
import Container from "../general/Container";

import CodeBlock from "../code-block/CodeBlock";

type Props = {
  buttonText: string;
  header: string;
  desc: string;
  code: string;
};
export default component$<Props>(({ buttonText, header, desc, code }) => {
  return (
    <Container>
      <div class="w-full">
        <div class="flex w-full flex-row justify-center gap-[10px] p-4">
          <ButtonV2 Icon={<ArrowBendLeftDown class="h-4 w-4 text-white" />}>
            {buttonText}
          </ButtonV2>
        </div>
        <div class="grid grid-cols-1 gap-[30px] px-5 py-5 md:px-[60px] lg:grid-cols-2 lg:flex-row">
          <div class="flex flex-col gap-[10px]">
            <h2 class="text-[23px] font-bold text-ct-crust md:text-[29px] lg:text-[35px]">
              {header}
            </h2>
            <p class="text-2xl text-ct-surface1">{desc}</p>
          </div>
          <div class="">
            <CodeBlock code={code} />
          </div>
        </div>
      </div>
    </Container>
  );
});
