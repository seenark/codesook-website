import { component$, useStyles$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import ContactBg from "~/media/contact1.png";
import style from "./style.module.css?inline";
import FacebookLogo from "@phosphor-icons/core/assets/regular/facebook-logo.svg?jsx";
import PhoneLogo from "@phosphor-icons/core/assets/regular/phone.svg?jsx";
import Line from "~/media/icons/line.svg?jsx";
import MapPin from "@phosphor-icons/core/assets/regular/map-pin.svg?jsx";
import Youtube from "@phosphor-icons/core/assets/regular/youtube-logo.svg?jsx";

export default component$(() => {
  useStyles$(style);
  return (
    <Container class="">
      <div class="relative overflow-hidden sm:px-[0] sm:py-[50px] md:p-[100px]">
        <img
          src={ContactBg}
          width={1820}
          height={1024}
          class="absolute bottom-0 left-0 right-0 top-0 -z-[1] min-h-[700px] w-full object-cover"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center gap-[10px] rounded-3xl p-6 backdrop-blur-xl">
            <h1 class="text-center text-[50px] font-bold text-white">
              Contact Us
            </h1>
            <ul class="mb-4 flex w-[161px] flex-col items-center justify-center gap-[15px]">
              <li>
                <FacebookLogo width={30} height={30} />
                <a href="https://www.facebook.com/codesook" target="_blank">
                  Code Sook
                </a>
              </li>
              <li>
                <Youtube class="h-8 w-8" />
                <a href="https://www.youtube.com/@CodeSook" target="_blank">
                  Youtube
                </a>
              </li>
              <li>
                <PhoneLogo width={30} height={30} />
                <a href="tel:0822528586">Code Sook</a>
              </li>
              <li>
                <Line width={30} height={30} />
                <a href="https://line.me/ti/p/~aum_kuiburi" target="_blank">
                  Code Sook
                </a>
              </li>
              <li>
                <MapPin width={30} height={30} />
                <a href="#" target="_blank">
                  Code Sook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
});
