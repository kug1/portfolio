export default function Navbar() {
  return (
    <div class="w-full flex justify-center relative">
      <nav class="mt-12 mb-10 w-fit">
        <ul class="flex flex-row">
          <li class="text-center text-base md:text-xl font-bold mx-3">
            <a
              class="relative cursor-pointer text-header"
              href="/"
            >
              Home
            </a>
          </li>
          <li class="text-center text-base md:text-xl font-bold mx-3">
            <a
              class="relative cursor-pointer text-header"
              href="/projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
