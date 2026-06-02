import Hamburger from "@/components/Hamburger.tsx";
import Link from "@/components/Link.tsx";
import List from "@/components/List.tsx";
import { NAV_ITEMS } from "@/lib/constants.ts";

const Header = () => {
  return (
    <header class="border-b">
      <nav class="py-6 px-4 lg:px-32 flex items-center justify-between gap-4">
        <Link href="/">
          <h1 class="text-4xl font-bold">Việt Huỳnh</h1>
        </Link>
        <Hamburger>
          <List class="list-none" role="menu">
            {NAV_ITEMS.map((item) => (
              <List.Item key={item.name} role="menuitem">
                <Link
                  href={item.href}
                  class={`py-1 aria-[current='page']:active-link ${
                    item.exact ? "" : "aria-[current='true']:active-link"
                  }`}
                >
                  {item.name}
                </Link>
              </List.Item>
            ))}
          </List>
        </Hamburger>
        <List class="hidden md:flex items-center gap-6 list-none" role="menu">
          {NAV_ITEMS.map((item) => (
            <List.Item key={item.name} class="ml-0! mt-0!" role="menuitem">
              <Link
                href={item.href}
                class={`py-1 aria-[current='page']:active-link ${
                  item.exact ? "" : "aria-[current='true']:active-link"
                }`}
              >
                {item.name}
              </Link>
            </List.Item>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
