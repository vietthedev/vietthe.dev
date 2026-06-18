import { App, csp, staticFiles, trailingSlashes } from "fresh";

import { State } from "@/utils.ts";

export const app = new App<State>()
  .use(csp({
    csp: [
      "default-src 'self'",
      "frame-src 'self' giscus.app",
      "img-src 'self' fresh.deno.dev usefresh.dev",
      "script-src 'self' giscus.app",
      "style-src 'self' 'unsafe-inline' giscus.app",
    ],
  }))
  .use(staticFiles())
  .use(trailingSlashes("never"))
  .fsRoutes();
