import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";

type Props = {
  title: string;
  description: string;
};
export default component$<Props>(({ title, description }) => {
  return (
    <Container class="bg-ct-base">
      <div class="flex flex-col items-center justify-center gap-[20px] px-[20px] py-[40px] text-center md:px-[40px]">
        <h1 class="text-[38px] font-bold text-white">{title}</h1>
        <p class="max-w-[480px] text-[24px] text-lightBlue">{description}</p>
      </div>
    </Container>
  );
});
