export default function Footer() {
  return (
    <div class="relative flex px-10 pt-10 pb-16 md:pb-0 h-32 bottom-0 mt-auto justify-center items-center">
      {
        /* <div class="mx-auto">
        <p class="text-center text-sm">
          Copyright © 2023. All rights reserved.
        </p>
      </div> */
      }
      <div class="absolute right-2 bottom-2 md:right-4 md:bottom-4 ">
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </div>
  );
}
