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

console.log(Deno.env.get("DENO_ENV"));
export const POST_DIRECTORY = Deno.env.get("DENO_ENV") !== "production"
  ? "data/blog"
  : "_fresh/client/data/blog";
