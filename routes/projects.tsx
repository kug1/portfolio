import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { Project } from "../types/types.ts";

import ProjectCard from "../components/ProjectCard.tsx";

export const handler: Handlers<Project[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(
      "https://api.github.com/users/kug1/repos?type=owner",
    );
    const data: Project[] = await resp.json();
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const projects = data.filter((e) => !e.fork);
    return ctx.render(projects);
  },
};

export default function Projects(props: PageProps<Project[] | null>) {
  return (
    <div class="text-center flex flex-col w-full mt-16">
      <h1 class="text-3xl font-bold w">All Projects</h1>
      <div class="w-full md:w-[740px] lg:w-[1104px] grid md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto mt-12">
        <ProjectCard {...props} />
      </div>
      <div class="w-fit mt-12">
        <a
          class="py-2 px-4 border-2 bg-secondary rounded"
          href="/"
        >
          Go Back
        </a>
      </div>
    </div>
  );
}
