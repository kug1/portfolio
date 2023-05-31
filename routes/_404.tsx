import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <div class="m-auto p-4 text-center mt-16">
        <h1 class="text-9xl font-bold">404</h1>
        <p class="font-bold text-sm mt-4">
          This page does not exist.
        </p>
      </div>
    </>
  );
}
