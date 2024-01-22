import { component$ } from "@builder.io/qwik";
import Container from "~/components/general/Container";
import ImgCodeSookLogo from "~/media/code_sook_logo.png?jsx";
import FacebookLogo from "@phosphor-icons/core/assets/regular/facebook-logo.svg?jsx";
import Phone from "@phosphor-icons/core/assets/regular/phone.svg?jsx";
import MapPin from "@phosphor-icons/core/assets/regular/map-pin.svg?jsx";
import Youtube from "@phosphor-icons/core/assets/regular/youtube-logo.svg?jsx";
import Line from "~/media/icons/line.svg?jsx";

type FootBoxProps = {
  header: string;
  links: { name: string; href: string }[];
};
const FootBox = component$<FootBoxProps>(({ header, links }) => {
  return (
    <div class="flex flex-col gap-[15px]">
      <h5 class="font-bold text-ct-base">{header}</h5>
      <div class="flex flex-col gap-[10px]">
        {links.map((l, i) => (
          <a key={i} href={l.href}>
            <h6 class="text-ct-subtext0">{l.name}</h6>
          </a>
        ))}
      </div>
    </div>
  );
});

export default component$(() => {
  const links: FootBoxProps[] = [
    {
      header: "Testimonials",
      links: [
        {
          name: "Feedback",
          href: "#",
        },
      ],
    },
    {
      header: "Course Catalog",
      links: [
        {
          name: "Web Development using Typescript for beginners",
          href: "/courses",
        },
      ],
    },
  ];
  return (
    <footer>
      <Container>
        <div class="flex flex-col gap-[60px] px-[40px] pb-[30px] pt-[60px]">
          <div class="flex grid-cols-3 flex-col gap-[20px] lg:grid lg:items-start">
            <div class="flex flex-col items-center justify-center">
              <div class="flex flex-row items-center justify-center gap-[10px]">
                <ImgCodeSookLogo class="h-[60px] w-[60px] rounded-full" />
                <h2 class="text-2xl font-bold text-ct-base">
                  Code Sook โค้ดสุข
                </h2>
              </div>
              <div class="flex flex-row items-center justify-center gap-[10px]">
                <a href="https://www.facebook.com/codesook" target="_blank">
                  <FacebookLogo class="h-8 w-8" />
                </a>
                <a href="https://www.youtube.com/@CodeSook" target="_blank">
                  <Youtube class="h-8 w-8" />
                </a>
                <a href="tel:0822528586" target="_blank">
                  <Phone class="h-8 w-8" />
                </a>
                <a href="https://line.me/ti/p/~aum_kuiburi" target="_blank">
                  <Line class="h-8 w-8" />
                </a>
                <a href="#" target="_blank">
                  <MapPin class="h-8 w-8" />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-start justify-start gap-[30px] md:grid md:grid-cols-3 lg:col-span-2">
              {links.map((l, i) => (
                <FootBox key={i} {...l} />
              ))}
              <div class="flex flex-col gap-[15px]">
                <a href="/faq">
                  <h5 class="font-bold text-ct-base">FAQ</h5>
                </a>
              </div>
              <FootBox
                header="About the Instructor"
                links={[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/atiwatseenark",
                  },
                  {
                    name: "Tel",
                    href: "tel:0822528586",
                  },
                ]}
              />
            </div>
          </div>
          <div class="flex w-full flex-row items-center justify-between border-t pt-[30px]">
            <h5 class="text-ct-surface2">© 2023 CodeSook, Inc</h5>
            <a href="https://www.facebook.com/codesook" target="_blank">
              <FacebookLogo class="h-8 w-8 text-blue-500" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
});
