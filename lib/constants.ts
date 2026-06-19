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

export const POST_DIRECTORY = import.meta.env.DEV
  ? "data/blog"
  : "_fresh/client/data/blog";
