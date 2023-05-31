import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { Project } from "../types/types.ts";

import Navbar from "../components/Navbar.tsx";
import AboutLanguages from "../components/AboutLanguages.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers<Project[]> = {
  async GET(_, ctx) {
    const req = await fetch(
      "https://api.github.com/users/kug1/repos?type=owner",
    );
    const data: Project[] = await req.json();
    if (data) {
      const projects = data.filter((e) => !e.fork);
      return ctx.render(projects);
    } else {
      return ctx.render();
    }
  },
};

export default function Home(props: PageProps<Project[]>) {
  return (
    <>
      <Navbar />
      <main>
        <div class="flex items-center pt-24 pb-24 text-center flex-col justify-center">
          <h1 class="font-bold text-5xl md:text-7xl mb-1 md:mb-3">kugi</h1>
          <p class="text-base md:text-xl md:mb-3 font-medium my-2">
            Software Engineer & Web Developer
          </p>
        </div>

        <div class="flex flex-col">
          <h1 class="text-center text-2xl md:text-3xl font-bold mt-6">
            About
          </h1>

          <div class="max-w-2xl self-center flex flex-col mt-10">
            <p class="text-center text-base font-medium px-3">
              Hello! Im a high-schooler who likes coding. I like making CLI
              tools, customizing Linux environment, designing websites and
              creating them from scratch. I use the following languages and
              frameworks while coding.
            </p>
            <AboutLanguages />
          </div>
        </div>
        <div class="mt-16">
          <h1 class="text-center text-2xl md:text-3xl font-bold mt-6">
            Projects
          </h1>
          <div class="w-[1104px] grid grid-cols-3 mt-10 mx-auto">
            <ProjectCard {...props} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}