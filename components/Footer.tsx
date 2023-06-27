export default function Footer() {
  return (
    <div class="relative flex p-10 h-32 bottom-0 mt-auto justify-center items-center">
      <div class="mx-auto">
        <p class="text-center">
          Copyright © 2023. All rights reserved.
        </p>
      </div>
      <div class="absolute right-8">
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
