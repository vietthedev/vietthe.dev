import { App, staticFiles, trailingSlashes } from "fresh";

import { State } from "@/utils.ts";

export const app = new App<State>()
  .use(staticFiles())
  .use(trailingSlashes("never"))
  .fsRoutes()
  .onError("*", (ctx) => {
    console.log(`Error: ${ctx.error}`);
    return new Response("Oops!", { status: 500 });
  })
  .get("/thrower", () => {
    throw new Error("fail");
  });
