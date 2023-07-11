export default function Navbar() {
  return (
    <div class="w-full flex justify-center relative">
      <nav class="my-8 w-fit">
        <ul class="flex flex-row">
          <li class="text-center text-base md:text-xl font-bold mx-3">
            <a
              class="relative cursor-pointer text-header"
              href="https://kugi.deno.dev/"
            >
              Home
            </a>
          </li>
          <li class="text-center text-base md:text-xl font-bold mx-3">
            <a
              class="relative cursor-pointer text-header"
              href="https://kugi.deno.dev/projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
