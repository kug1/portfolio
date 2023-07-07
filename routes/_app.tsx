import { Head } from "$fresh/runtime.ts";
import { AppProps } from "https://deno.land/x/fresh@1.1.6/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="h-full">
      <Head>
        <title>kugi</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body class="min-h-full flex flex-col">
        <Component />
      </body>
    </html>
  );
}
