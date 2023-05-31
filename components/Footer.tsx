export default function Footer() {
  return (
    <div class="p-10 h-32 bottom-0 mt-auto">
      <p class="text-center">
        Powered by <a
          href="https://nuxt.com"
          target="_blank"
          class="dark:text-github-blue text-blue-600 font-semibold"
        >
           Nuxt3
        </a> and <a
          href="https://tailwindcss.com"
          target="_blank"
          class="dark:text-github-blue text-blue-600 font-semibold"
        >
          Tailwind
        </a>.
      </p>
      <p class="text-center">
        Copyright © 2023 <a
          href="https://github.com/kug1"
          target="_blank"
          class="dark:text-github-blue text-blue-600 font-semibold"
        >
          kugi
        </a>.
      </p>
    </div>
  );
}
