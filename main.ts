import { App, staticFiles, trailingSlashes } from "fresh";

import { State } from "@/utils.ts";

export const app = new App<State>()
  .use(staticFiles())
  .use(trailingSlashes("never"))
  .fsRoutes();
