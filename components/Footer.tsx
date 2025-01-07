import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import Text from "@/components/Typography/Text.tsx";
import Title from "@/components/Typography/Title.tsx";
import { NAV_ITEMS } from "@/lib/constants.ts";
import { VNode } from "preact";
import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import IconBrandLinkedin from "tabler_icons_tsx/brand-linkedin.tsx";

const menus: {
  title: string;
  children: {
    name: string;
    href: string;
    icon?: VNode;
    openNewTab?: boolean;
    title?: string;
  }[];
}[] = [
  {
    title: "Navigation",
    children: NAV_ITEMS,
  },
  {
    title: "Links",
    children: [
      {
        name: "vietthedev",
        href: "https://github.com/vietthedev",
        icon: <IconBrandGithub />,
        openNewTab: true,
        title: "GitHub",
      },
      {
        name: "vietthedev",
        href: "https://www.linkedin.com/in/vietthedev",
        icon: <IconBrandLinkedin />,
        openNewTab: true,
        title: "LinkedIn",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer class="border-t px-4 lg:px-32 py-8">
      <div class="flex flex-col md:flex-row gap-8 md:gap-60">
        {menus.map((item) => (
          <div key={item.title}>
            <Title>{item.title}</Title>
            <List class="list-none">
              {item.children.map((child) => (
                <List.Item
                  class="first:!mt-0 !ml-0"
                  key={`${child.name}-${child.href}`}
                >
                  <Link
                    href={child.href}
                    title={child.title}
                    target={child.openNewTab ? "_blank" : undefined}
                  >
                    {child.icon
                      ? (
                        <Text class="flex items-center gap-2">
                          {child.icon}
                          {child.name}
                        </Text>
                      )
                      : child.name}
                  </Link>
                </List.Item>
              ))}
            </List>
          </div>
        ))}
      </div>
      <div class="mt-4 flex flex-col items-end gap-3">
        <Link href="https://fresh.deno.dev" target="_blank">
          <picture>
            <source
              srcset="https://fresh.deno.dev/fresh-badge-dark.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </picture>
        </Link>
        <Text>&copy; Việt Huỳnh {new Date().getFullYear()}</Text>
      </div>
    </footer>
  );
};

export default Footer;
