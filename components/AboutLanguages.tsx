import Vue from "$tabler-icons/brand-vue.tsx";
import TypeScript from "$tabler-icons/brand-typescript.tsx";
import TailwindCSS from "$tabler-icons/brand-tailwind.tsx";
import IconBrandNuxt from "$tabler-icons/brand-nuxt.tsx";

export default function AboutLanguages() {
  return (
    <div class="mt-12">
      <ul class="flex flex-wrap justify-center align-center">
        <li class="p-5 m-3 border-2 bg-secondary rounded flex flex-row justify-start w-[10rem] md:w-[12rem]">
          <TypeScript class="w-6 h-6" />
          <span class="font-semibold text-sm mx-1 grid place-content-center">
            TypeScript
          </span>
        </li>
        <li class="p-5 m-3 border-2 bg-secondary text-black rounded flex flex-row justify-start w-[10rem] md:w-[12rem]">
          <Vue class="w-6 h-6" />
          <span class="font-semibold text-sm mx-1 grid place-content-center">
            Vue
          </span>
        </li>
        <li class="p-5 m-3 border-2 bg-secondary rounded flex flex-row justify-start w-[10rem] md:w-[12rem]">
          <TailwindCSS class="w-6 h-6" />
          <span class="font-semibold text-sm mx-1 grid place-content-center">
            Tailwind
          </span>
        </li>
        <li class="p-5 m-3 border-2 bg-secondary rounded flex flex-row justify-start w-[10rem] md:w-[12rem]">
          <IconBrandNuxt />
          <span class="font-semibold text-sm mx-1 grid place-content-center">
            Nuxt
          </span>
        </li>
      </ul>
    </div>
  );
}
