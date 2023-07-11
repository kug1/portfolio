import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w-36 border-2 border-secondary mx-auto py-2 px-4 font-semibold rounded shadow shadow-secondary/75 transition-all ease-out"
    />
  );
}
