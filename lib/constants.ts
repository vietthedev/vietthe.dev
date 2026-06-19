import { exists } from "@std/fs";

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    exact: true,
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
    exact: true,
  },
];

export const POST_DIRECTORY = await exists("../_fresh", { isDirectory: true })
  ? "_fresh/client/data/blog"
  : "data/blog";
