import { component$ } from "@builder.io/qwik";
// import styles from "./header.module.css";
import Navbar from "./navbar";

export default component$(() => {
  return (
    <header class="mx-auto max-w-[1200px] px-[30px] py-4">
      <Navbar />
    </header>
  );
});
