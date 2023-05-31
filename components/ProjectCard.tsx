import { PageProps } from "https://deno.land/x/fresh@1.1.6/server.ts";
import { Project } from "../types/types.ts";

import { trimmedString } from "../composables/trimmedString.ts";

import Bookmark from "$tabler-icons/bookmark.tsx";
import Star from "$tabler-icons/star.tsx";

export default function ProjectCard({ data }: PageProps<Project[]>) {
  return (
    <>
      {data.map((data) => (
        <div class="flex flex-col border-[#000000] border-2 rounded p-5 overflow-hidden w-[20rem] md:w-[21.50rem] h-28 m-3">
          <div class="flex flex-row flex-wrap justify-between content-center h-6">
            <a
              class="flex flex-row text-blue-600"
              href={data.html_url}
              target="_blank"
            >
              <Bookmark class="w-6 h-6" />
              <h1 class="text-center font-semibold">
                {data.name}
              </h1>
            </a>
            <div class="flex flex-row items-center">
              <span class="p-1 text-sm font-medium">
                {data.stargazers_count}
              </span>
              <Star class="w-4 h-4" />
            </div>
          </div>
          <div class="h-full flex flex-col justify-between">
            <p class="text-sm text-left my-auto">
              {trimmedString(data.description, 37)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
