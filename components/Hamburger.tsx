import { ComponentChildren } from "preact";

interface HamburgerProps {
  children: ComponentChildren;
}

const Hamburger = (props: HamburgerProps) => {
  const { children } = props;

  return (
    <label
      class="md:hidden relative z-40 cursor-pointer px-3 py-6 [&_svg]:z-50 [&_svg]:relative"
      for="mobile-menu"
    >
      <input class="peer hidden" type="checkbox" id="mobile-menu" />
      <div class="relative z-50 block h-px w-7 bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-(--fallback-bc,oklch(var(--bc)/1)) before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-(--fallback-bc,oklch(var(--bc)/1)) after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform">
      </div>
      <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
        &nbsp;
      </div>
      <div class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
        <div class="float-right min-h-full w-[85%] bg-(--fallback-b1,oklch(var(--b1)/1)) px-6 pt-12 shadow-2xl">
          {children}
        </div>
      </div>
    </label>
  );
};

export default Hamburger;
