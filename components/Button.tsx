import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-36 border-2 border-[#000000] mx-auto py-2 px-4 font-semibold border-solid rounded shadow shadow-black/75 dark:shadow-white/60 dark:shadow-md transition-all ease-out"
    />
  );
}
