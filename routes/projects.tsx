import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { Project } from "../types/types.ts";

import ProjectCard from "../components/ProjectCard.tsx";
import Button from "../components/Button.tsx";

export const handler: Handlers<Project[]> = {
  async GET(_, ctx) {
    const req = await fetch(
      "https://api.github.com/users/kug1/repos?type=owner",
    );
    const data: Project[] = await req.json();
    const projects = data.filter((e) => !e.fork);
    return ctx.render(projects);
  },
};

export default function Projects(props: PageProps<Project[]>) {
  return (
    <div class="text-center flex flex-col w-3/4 mx-auto mt-16">
      <h1 class="text-3xl font-bold">All Projects</h1>
      <div class="w-[1104px] flex flex-wrap mt-8 mx-auto">
        <ProjectCard {...props} />
      </div>
      <Button href="http://localhost:8000">Go Back</Button>
    </div>
  );
}
