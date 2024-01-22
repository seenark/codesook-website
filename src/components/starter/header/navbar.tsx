import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ButtonV2 from "~/components/button/ButtonV2";
import ImgCodeSookLogo from "~/media/code_sook_logo.png?jsx";
import ArrowBendLeftDown from "@phosphor-icons/core/assets/regular/arrow-bend-left-down.svg?jsx";
import styles from "./navbar.module.css?inline";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <nav class="flex items-center justify-between">
      <Link href="/" class="flex items-center justify-center gap-[10px]">
        <div>
          <ImgCodeSookLogo class="h-[42px] w-[42px] rounded-full" />
        </div>
        <h3 class="text-2xl font-bold text-ct-crust">Code Sook</h3>
      </Link>
      <div>
        <ul class="flex items-center justify-center gap-[30px]">
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ButtonV2
          class="flex"
          Icon={<ArrowBendLeftDown class="h-4 w-4 text-white" />}
        >
          Take Course
        </ButtonV2>
      </div>
    </nav>
  );
});
