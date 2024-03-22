// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about from "./routes/about.tsx";
import * as $api_posts_slug_ from "./routes/api/posts/[slug].ts";
import * as $api_posts_index from "./routes/api/posts/index.ts";
import * as $blog_slug_ from "./routes/blog/[slug].tsx";
import * as $blog_index from "./routes/blog/index.tsx";
import * as $index from "./routes/index.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/api/posts/[slug].ts": $api_posts_slug_,
    "./routes/api/posts/index.ts": $api_posts_index,
    "./routes/blog/[slug].tsx": $blog_slug_,
    "./routes/blog/index.tsx": $blog_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/GoBackButton.tsx": $GoBackButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
