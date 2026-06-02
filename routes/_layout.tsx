import { PageProps } from "fresh";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";

const Layout = (props: PageProps) => {
  const { Component } = props;

  return (
    <>
      <Header />
      <main class="px-4 py-8 max-w-4xl mx-auto">
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
